import { CartFill } from "react-bootstrap-icons";
import style from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={style.cartBody}>
      <div className={style.buttonBody}>
        <CartFill />
      </div>
      <p>Show Cart</p>
    </button>
  );
};

export default CartButton;
