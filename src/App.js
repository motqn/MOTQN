import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComponentsGallery from "./Components/ComponentsGallery/ComponentsGallery";
import CartButton from "./Components/CartButton";
import NavigationPage from "./Components/NavigationPage";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <NavigationPage />
        <ComponentsGallery />
        <CartButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
