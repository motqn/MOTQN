import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductTable from "./Components/ProductsTable";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <ProductTable />
        <Footer />
      </div>
    </>
  );
}

export default App;
