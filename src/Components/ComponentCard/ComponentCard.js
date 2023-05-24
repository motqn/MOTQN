import style from "./ComponentCard.module.css";

const ComponentCard = ({
  id,
  name,
  image,
  souqPrice,
  sellPrice,
  specs,
  defects,
  status,
  available,
  onBuy,
  onDetails,
  newStatus,
}) => {
  return (
    <div key={id} className={style.cardContainer}>
      <div className={style.componentImageContainer}>
        <img src={image} alt="Component" />
      </div>
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
      <p className={newStatus === "TRUE" ? style.newSt : style.usedSt}>
        {newStatus === "TRUE" ? "New" : "Used"}
      </p>
      <div className={style.componentDescription}>
        <div className={style.cardText}>
          <h2 className={style.title}>{name}</h2>
          <div className={style.priceContainer}>
            <p className={style.souqPrice}>{souqPrice} EGP</p>
            <p className={style.price}>{sellPrice} EGP</p>
          </div>
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
