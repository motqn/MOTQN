import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComponentsGallery from "./Components/ComponentsGallery/ComponentsGallery";
import CartButton from "./Components/CartButton";

import { ToastContainer } from "react-toastify";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  return (
    <>
      <div className="page-container">
        <ToastContainer />
        <Navbar setSearchStr={setSearchStr} />
        <ComponentsGallery
          searchStr={searchStr}
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
