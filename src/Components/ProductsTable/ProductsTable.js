import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import style from "./ProductTable.module.css";
import Spinner from "react-bootstrap/Spinner";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
const ProductTable = () => {
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

  return loading ? (
    <>
      <div className={style.spinnerContainer}>
        <Spinner variant="dark" />
      </div>
    </>
  ) : (
    <div className={style.productsBody}>
      <div className={style.productsTableContainer}>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Specs</th>
              <th>Defects</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {components.map((component) => (
              <tr
                key={component.ID}
                className={
                  selectedItems.find(
                    (element) => element.id === component.ID
                  ) !== undefined
                    ? style.selectedItem
                    : ""
                }
                onClick={(e) => {
                  if (
                    selectedItems.find(
                      (element) => element.id === component.ID
                    ) !== undefined
                  ) {
                    setSelectedItems((prevValue) => {
                      return prevValue.filter(
                        (element) => element.id !== component.ID
                      );
                    });
                  } else {
                    setSelectedItems((prevValue) => [
                      ...prevValue,
                      { id: component.ID, name: component.Name },
                    ]);
                  }
                }}
              >
                <td>{component.Name}</td>
                <td>{component.Spec}</td>
                <td>{component.Defects}</td>
                <td>{component["Price\nSell"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CheckoutButton onClick={handleClick} />
    </div>
  );
};

export default ProductTable;
