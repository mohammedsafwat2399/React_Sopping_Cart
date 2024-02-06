import { createContext, useContext, useState , useEffect } from "react";
import ShoppingCart from "../shoppingCart/ShoppingCart";
 const initialCartItems = localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")):[];
const ShoppingCartContext = createContext({});
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isOpen, setIsOpen] = useState(false);
useEffect(()=>{
  localStorage.setItem("shopping-cart" , JSON.stringify(cartItems))
},[cartItems])
  const cartQuantity = cartItems.reduce(( quantity, item)=>
    item.quantity + quantity  , 0
  )
  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart  isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
