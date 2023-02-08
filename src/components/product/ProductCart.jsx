import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { cartActions } from "../../store/cartSlice";

const ProductCart = ({ id, name, price, qty, category, cover, desc }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt="" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductCart;
