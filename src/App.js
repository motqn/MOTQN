import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComponentsGallery from "./Components/ComponentsGallery/ComponentsGallery";
import CartButton from "./Components/CartButton";
import NavigationPage from "./Components/NavigationPage";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <div className="page-container">
        <Navbar />
        <NavigationPage />
        <ComponentsGallery
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <CartButton
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
