import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <div className={style.navbarBody}>
      <img src={logo} alt="logo" />
      <h2>Motqn</h2>
    </div>
  );
};

export default Navbar;
