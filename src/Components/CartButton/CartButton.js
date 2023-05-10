import { CartFill } from "react-bootstrap-icons";
import style from "./CartButton.module.css";

const CartButton = ({ selectedItems, setSelectedItems }) => {
  return (
    <button className={style.cartBody}>
      <div className={style.buttonBody}>
        {selectedItems.length !== 0 && <p className={style.cartProducts}>{selectedItems.length}</p>}
        <CartFill />
      </div>
      <p>Show Cart</p>
    </button>
  );
};

export default CartButton;
