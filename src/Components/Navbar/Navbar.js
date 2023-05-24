import style from "./Navbar.module.css";
import logo from "../../assets/images/MotqnLW.png";
import { Search } from "react-bootstrap-icons";
import { useRef, useState } from "react";

const Navbar = ({ setSearchStr }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchStr(inputRef.current.value);
  };
  return (
    <div className={style.navbarBody}>
      <h2>
        Home <span>/</span> Components
      </h2>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <div className={style.searchContainer}>
          <input type="Text" ref={inputRef} onChange={handleSubmit} />
          <button type="submit">
            <Search />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
