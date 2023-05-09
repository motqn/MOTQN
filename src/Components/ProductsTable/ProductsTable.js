import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import style from "./ProductTable.module.css";

const ProductTable = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: "AIzaSyDNTfovoZcOsAQdDmef04yUJMMzB4qi4E0",
    sheetId: "1Q9FDjB9rAkb2GJsF45DWAoLhM4ecJHOyWlRWMw5ei_A",
  });
  const [components, setComponents] = useState([]);
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
    "loading..."
  ) : (
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
            <tr>
              <td>{component.Name}</td>
              <td>{component.Spec}</td>
              <td>{component.Defects}</td>
              <td>{component["Price\nSell"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
