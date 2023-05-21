import React, { useState } from "react";
import style from "./CartButton.module.css";
import Popup from "../Popup";
import { CartFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
const CartButton = ({ selectedItems, setSelectedItems }) => {
  const [showPopup, setShowPopup] = useState(false);
  const changeQuantity = (item, delta) => {
    if (item.quantity + delta < 1) {
      toast.error("Can't set the quantity to be less than one", {
        autoClose: 1000,
        position: "top-center",
      });
      return;
    }
    if (item.quantity + delta > item.available) {
      toast.error(
        "Can't buy that number of products, only " +
          item.available +
          " are currently available!",
        {
          autoClose: 1000,
          position: "top-right",
        }
      );
      return;
    }
    setSelectedItems((prevValue) => {
      const listCopy = [...prevValue];
      const itemIndex = listCopy.findIndex((element) => element.id === item.id);
      listCopy[itemIndex].quantity += delta;
      return listCopy;
    });
  };
  return (
    <>
      <Popup trigger={showPopup}>
        <div className={style.popupBody}>
          <h2>Your Cart</h2>
          {!!selectedItems.length ? (
            <>
              <div className={style.cartTableContainer}>
                <table >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Component</th>
                      <th>Item Price</th>
                      <th>Quantity</th>
                      <th>Total Price / Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems.map((item) => (
                      <tr>
                        <td
                          className={style.deleteButton}
                          onClick={(e) => {
                            e.target.parentNode.classList.add(
                              style.showDeleteAnimation
                            );
                            setTimeout(() => {
                              e.target.parentNode.classList.remove(
                                style.showDeleteAnimation
                              );
                              setSelectedItems((prevValue) => {
                                return prevValue.filter(
                                  (element) => element.id !== item.id
                                );
                              });
                            }, 800);
                          }}
                        >
                          x
                        </td>
                        <td style={{ textAlign: "left" }}>{item.name}</td>
                        <td>{item.price}</td>
                        <td className={style.quantityCell}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              changeQuantity(item, -1);
                            }}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              changeQuantity(item, 1);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className={style.priceTotal}>
                Total :
                <span>
                  {selectedItems
                    .reduce(
                      (total, current) =>
                        total + current.quantity * current.price,
                      0
                    )
                    .toFixed(2) + " EGP"}
                </span>
              </h2>
            </>
          ) : (
            <p>Your Cart is Empty, Add some items</p>
          )}

          <div className={style.buttonsContainer}>
            <button
              onClick={() => {
                setShowPopup(false);
              }}
              className={style.continueShoppingButton}
            >
              Continue Shopping
            </button>
            <button
              onClick={() => {
                const url = new URL("https://wa.me/+201025307327");
                const message =
                  "Hello Motqn, I'd like to buy:" +
                  selectedItems.reduce((total, current) => {
                    return (
                      total +
                      `\n - (${current.quantity}) of "${current.name}" which id is [${current.id}]`
                    );
                  }, "");
                url.searchParams.append("text", message);
                window.open(url.toString(), "_blank");
                setSelectedItems([]);
                setShowPopup(false);
              }}
              className={
                style.checkoutButton +
                " " +
                (!selectedItems.length ? style.disabledButton : "")
              }
              disabled={!selectedItems.length}
            >
              Checkout
            </button>
          </div>
        </div>
      </Popup>
      <button
        className={style.cartBody}
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <div className={style.buttonBody}>
          {selectedItems.length !== 0 && (
            <p className={style.cartProducts}>{selectedItems.length}</p>
          )}
          <CartFill />
        </div>
        <p>Show Cart</p>
      </button>
    </>
  );
};

export default CartButton;
