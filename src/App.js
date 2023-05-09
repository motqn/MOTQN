import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductTable from "./Components/ProductsTable";
import CheckoutButton from "./Components/CheckoutButton/CheckoutButton";
function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <ProductTable />
        <CheckoutButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
