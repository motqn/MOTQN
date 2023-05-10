import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComponentsGallery from "./Components/ComponentsGallery/ComponentsGallery";
import CartButton from "./Components/CartButton";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <ComponentsGallery />
        <CartButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
