import style from "./CheckoutButton.module.css";

const CheckoutButton = ({ onClick }) => {
  return (
    <div className={style.buttonContainer}>
      <button onClick={onClick}>Checkout</button>
    </div>
  );
};

export default CheckoutButton;
