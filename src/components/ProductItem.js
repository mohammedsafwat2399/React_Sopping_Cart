import React from "react";
import { Button, Card } from "react-bootstrap";
import  {useShoppingCart}  from "../context/ShoppingCartContext";
import formatCurrency from "../fromCurrency/formatCurrency";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img  
          src={imgUrl}
        variant="top"
        style={{ height: "400px", objectFit: "cover" }}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? 
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
           : 
            <div
              className=" d-flex  align-items-center  flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className=" d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span>{quantity} in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}> +</Button>
              </div>
              <Button
                onClick={() => removeItemFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem
