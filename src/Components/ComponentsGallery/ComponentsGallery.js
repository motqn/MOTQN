import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useGoogleSheets from "use-google-sheets";
import Spinner from "react-bootstrap/Spinner";
import style from "./ComponentsGallery.module.css";
import ComponentCard from "../ComponentCard";
import Popup from "../Popup";
const ComponentsGallery = ({ searchStr, selectedItems, setSelectedItems }) => {
  const [components, setComponents] = useState([]);
  const [componentDetails, setComponentsDetails] = useState({});
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const quantityRef = useRef();
  const { data, loading } = useGoogleSheets({
    apiKey: "AIzaSyB36HE6CTusQids_GUWE0nASGSoQzCiCVQ",
    sheetId: "1nIl2Nerrd279wKb8bjv2SxGTZ0IMf-ojt90WRwK1dSA",
  });

  const addItem = (id, quantity, componentData = componentDetails) => {
    quantity = parseInt(quantity);
    setSelectedItems((prevList) => {
      const res = [...prevList];
      const componentIndex = res.findIndex(
        (element) => element.id === componentData.id
      );

      if (componentIndex === -1) {
        res.push({ ...componentData, quantity });
      } else {
        res[componentIndex].quantity += quantity;
      }

      return res;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = parseInt(quantityRef.current.value);
    let quantityTaken = 0;
    const index = selectedItems.findIndex(
      (item) => item.id === componentDetails.id
    );
    if (index !== -1) {
      quantityTaken = selectedItems[index].quantity;
    }
    if (componentDetails.available - quantityTaken < quantity) {
      toast.error(
        "Can't buy that number of products, only " +
          componentDetails.available +
          " are currently available!",
        {
          autoClose: 1000,
          position: "top-right",
        }
      );
      return;
    }

    setShowDetailsPopup(false);
    toast.success("Component Added To Cart", {
      autoClose: 1000,
      position: "top-center",
    });
    addItem(componentDetails.id, quantity);
  };
  useEffect(() => {
    if (!loading) {
      const componentsPage = data.find((page) => page.id === "Components");

      setComponents(
        componentsPage.data.filter((component) => {
          return (
            component["In\nPlatform"] === "TRUE" &&
            component["Name"].toLowerCase().includes(searchStr.toLowerCase())
          );
        })
      );
    }
  }, [loading, data, searchStr]);

  return (
    <div className={style.sectionBody}>
      {loading ? (
        <div className={style.spinnerContainer}>
          <Spinner variant="dark" />
        </div>
      ) : (
        <>
          <Popup trigger={showDetailsPopup}>
            <form onSubmit={handleSubmit}>
              <div className={style.popupBody}>
                <div className={style.componentDetails}>
                  <img src={componentDetails.image} alt="Component" />
                  <div className={style.componentData}>
                    <div className={style.componentText}>
                      <div className={style.productTitle}>
                        <p className={style.name}>{componentDetails.name}</p>
                        <p
                          className={
                            componentDetails.status === "Available"
                              ? style.availableSt
                              : componentDetails.status === "Sold Out"
                              ? style.soldSt
                              : style.pendingSt
                          }
                        >
                          {componentDetails.status}
                        </p>
                      </div>
                      <div className={style.productTableContainer}>
                        <table>
                          <thead>
                            <tr>
                              <th>A</th>
                              <th>B</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>remaining in stock</td>
                              <td>{componentDetails.available}</td>
                            </tr>
                            <tr>
                              <td>Specs</td>
                              <td>{componentDetails.specs || "None"}</td>
                            </tr>
                            <tr>
                              <td>Defects</td>
                              <td>{componentDetails.defects || "None"}</td>
                            </tr>
                            <tr>
                              <td>Price</td>
                              <td> {componentDetails.price} EGP</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className={style.quantityContainer}>
                      <label>
                        Quantity:
                        <input
                          type="number"
                          defaultValue={1}
                          ref={quantityRef}
                          min={1}
                          max={componentDetails.available}
                        />
                      </label>
                    </div>

                    <div className={style.buttonsContainer}>
                      <button
                        className={style.cancelButton}
                        onClick={(e) => {
                          setShowDetailsPopup(false);
                        }}
                        type="button"
                      >
                        Cancel
                      </button>
                      <button type="submit" className={style.buyButton}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Popup>

          <div className={style.galleryContainer}>
            {components.map((component) => {
              const componentData = {
                id: component.ID,
                name: component.Name,
                available: component.Available,
                image: component.IMG,
                price: component["Price\nSell"],
                specs: component.Specs,
                defects: component.Defects,
                status: component.Status,
              };
              return (
                <ComponentCard
                  key={component.ID}
                  {...componentData}
                  onDetails={() => {
                    setComponentsDetails(componentData);
                    setShowDetailsPopup(true);
                  }}
                  onBuy={() => {
                    let quantityTaken = 0;
                    const index = selectedItems.findIndex(
                      (item) => item.id === componentData.id
                    );
                    if (index !== -1) {
                      quantityTaken = selectedItems[index].quantity;
                    }
                    if (componentData.available - quantityTaken < 1) {
                      toast.error(
                        "Can't buy that number of products, only " +
                          componentData.available +
                          " are currently available!",
                        {
                          autoClose: 1000,
                          position: "top-right",
                        }
                      );
                      return;
                    }
                    toast.success("Component Added To Cart", {
                      autoClose: 1000,
                      position: "top-center",
                    });
                    addItem(componentData.id, 1, componentData);
                  }}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ComponentsGallery;
