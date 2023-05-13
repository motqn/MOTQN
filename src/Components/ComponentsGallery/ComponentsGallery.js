import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useGoogleSheets from "use-google-sheets";
import Spinner from "react-bootstrap/Spinner";
import style from "./ComponentsGallery.module.css";
import ComponentCard from "../ComponentCard";
import Popup from "../Popup";
const ComponentsGallery = ({ selectedItems, setSelectedItems }) => {
  const [components, setComponents] = useState([]);
  const [componentDetails, setComponentsDetails] = useState({});
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const quantityRef = useRef();
  const { data, loading } = useGoogleSheets({
    // apiKey: "AIzaSyDNTfovoZcOsAQdDmef04yUJMMzB4qi4E0",
    // sheetId: "1Q9FDjB9rAkb2GJsF45DWAoLhM4ecJHOyWlRWMw5ei_A",

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
    setShowDetailsPopup(false);
    toast.success("Component Added To Cart", {
      autoClose: 1000,
      position: "top-center",
    });
    addItem(componentDetails.id, quantityRef.current.value);
  };
  useEffect(() => {
    if (!loading) {
      const componentsPage = data.find((page) => page.id === "Components");

      setComponents(
        componentsPage.data.filter((component) => {
          return component["In\nPlatform"] === "TRUE";
        })
      );
    }
  }, [loading, data]);

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
                      <p>Specs: {componentDetails.specs || "None"}</p>
                      <p>Defects: {componentDetails.defects || "None"}</p>

                      <p>Price: {componentDetails.price} EGP</p>
                    </div>

                    <div className={style.quantityContainer}>
                      <label>
                        Quantity:
                        <input
                          type="number"
                          defaultValue={1}
                          ref={quantityRef}
                          min={1}
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
