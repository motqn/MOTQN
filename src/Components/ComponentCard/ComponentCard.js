import style from "./ComponentCard.module.css";

const ComponentCard = ({ id, name, image, price, specs, defects, status }) => {
  return (
    <div key={id} className={style.cardContainer}>
      <img src={image} alt="Component" />
      <div className={style.componentDescription}>
        <div className={style.cardText}>
          <h2 className={style.title}>{name}</h2>
          <p className={style.price}>{price} EGP</p>
        </div>
        <div className={style.cardButtonsContainer}>
          <button className={style.detailsButton}>Details</button>
          <button className={style.buyButton}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
