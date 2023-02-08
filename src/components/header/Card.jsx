import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  //total
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  const [cardOpen, setCarOpen] = useState(false);
  const closeCard = () => {
    setCarOpen(false);
  };
  return (
    <>
      <div className="card" onClick={() => setCarOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            {...item}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
          />
        ))}
        <div className="checkOut">
          <button>
            <span>Price To checkout</span>
            <label htmlFor="">$ {total} </label>
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
