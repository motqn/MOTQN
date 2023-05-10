import style from "./NavigationPage.module.css";
import { Search } from "react-bootstrap-icons";
const NavigationPage = () => {
  return (
    <div className={style.NavigationPageContainer}>
      <h2>
        Home <span>/</span> Shop
      </h2>
      <div className={style.searchContainer}>
        <Search />
        <input type="Text" />
      </div>
    </div>
  );
};

export default NavigationPage;
