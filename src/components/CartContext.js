import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
    console.log(cart);
  };

  const newCart = (nCart) => {
    setCart(nCart);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, addItem: addToCart, setCart: newCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
