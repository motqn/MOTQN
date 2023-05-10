import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import Spinner from "react-bootstrap/Spinner";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import style from "./ComponentsGallery.module.css";
import ComponentCard from "../ComponentCard";

const ComponentsGallery = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [components, setComponents] = useState([]);
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
          <div className={style.galleryContainer}>
            {components.map((component) => (
              <ComponentCard
                id={component.ID}
                name={component.Name}
                image={component.IMG}
                price={component["Price\nSell"]}
                specs={component.Specs}
                defects={component.Defects}
                status={component.Status}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ComponentsGallery;
