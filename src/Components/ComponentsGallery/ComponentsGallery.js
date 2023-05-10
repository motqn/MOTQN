import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import Spinner from "react-bootstrap/Spinner";
import style from "./ComponentsGallery.module.css";
import ComponentCard from "../ComponentCard";
import Popup from "../Popup";
const ComponentsGallery = ({ selectedItems, setSelectedItems }) => {
  const [components, setComponents] = useState([]);
  const [componentDetails, setComponentsDetails] = useState({});
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
  const { data, loading } = useGoogleSheets({
    apiKey: "AIzaSyDNTfovoZcOsAQdDmef04yUJMMzB4qi4E0",
    sheetId: "1Q9FDjB9rAkb2GJsF45DWAoLhM4ecJHOyWlRWMw5ei_A",
  });

  const handleClick = () => {
    const url = new URL("https://wa.me/+201025307327");
    const message =
      "Hello Motqn, I'd like to buy:" +
      selectedItems.reduce((total, current) => {
        return total + `\n - "${current.name}" which id is [${current.id}]`;
      }, "");
    url.searchParams.append("text", message);
    window.open(url.toString(), "_blank");
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
            <div className={style.popupBody}>
              <div className={style.componentDetails}>
                <img src={componentDetails.image} alt="Component" />

                <div className={style.componentText}>
                  <p className={style.name}>{componentDetails.name}</p>
                  <p>{componentDetails.specs}</p>
                  <p>{componentDetails.defects}</p>
                  <p>{componentDetails.status}</p>
                  <p>{componentDetails.price}</p>
                </div>
              </div>
              <div className={style.buttonsContainer}>
                <button
                  className={style.cancelButton}
                  onClick={(e) => {
                    setShowDetailsPopup(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={style.buyButton}
                  onClick={(e) => {
                    setShowDetailsPopup(false);
                    setShowAddToCartPopup(true);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Popup>

          <Popup trigger={showAddToCartPopup}>
            <div className={style.popupBody}>
              <div className={style.componentDetails}>
                <img src={componentDetails.image} alt="Component" />

                <div className={style.componentText}>
                  <p className={style.name}>{componentDetails.name}</p>
                  <p>{componentDetails.specs}</p>
                  <p>{componentDetails.defects}</p>
                  <p>{componentDetails.status}</p>
                  <p>{componentDetails.price}</p>
                </div>
              </div>
              <div className={style.buttonsContainer}>
                <button
                  className={style.cancelButton}
                  onClick={(e) => {
                    setShowAddToCartPopup(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={style.buyButton}
                  onClick={(e) => {
                    setShowAddToCartPopup(false);
                    setSelectedItems((prevItem) => [
                      ...prevItem,
                      componentDetails,
                    ]);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
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
                  {...componentData}
                  onDetails={() => {
                    setComponentsDetails({ ...componentData });
                    setShowDetailsPopup(true);
                  }}
                  onBuy={() => {
                    // setComponentsDetails({ ...componentData });
                    setSelectedItems((prevItem) => [
                      ...prevItem,
                      componentData,
                    ]);
                    // setShowAddToCartPopup(true);
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
