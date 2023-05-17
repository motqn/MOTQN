import style from "./ComponentCard.module.css";

const ComponentCard = ({
  id,
  name,
  image,
  price,
  specs,
  defects,
  status,
  available,
  onBuy,
  onDetails,
}) => {
  return (
    <div key={id} className={style.cardContainer}>
      <img src={image} alt="Component" />
      <p
        className={
          status === "Available"
            ? style.availableSt
            : status === "Sold Out"
            ? style.soldSt
            : style.pendingSt
        }
      >
        {status}
      </p>
      <div className={style.componentDescription}>
        <div className={style.cardText}>
          <h2 className={style.title}>{name}</h2>
          <p className={style.price}>{price} EGP</p>
        </div>
        <div className={style.cardButtonsContainer}>
          <button className={style.detailsButton} onClick={onDetails}>
            Details
          </button>
          <button className={style.buyButton} onClick={onBuy}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
