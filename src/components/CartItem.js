import { useState, useContext, useEffect } from "react";
import CartContext from "./CartContext";
import classes from './CartItem.module.css'
const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {}, []);

  function incrementCount() {
    let newCart = [];
    cart.map((item) => {
      if (props.data.name === item.data.name) {
        let data = {
          id: props.data.id,
          name: props.data.name,
          description: props.data.description,
          price: item.data.price + props.price,
        };
        newCart.push({
          data: data,
          amount: item.amount + 1,
          OGprice: props.price,
        });
      } else {
        newCart.push(item);
      }
    });
    setCart(newCart);
  }
  function decrementCount() {
    let newCart = [];
    cart.map((item) => {
      if (props.data.name === item.data.name) {
        if (item.amount > 1) {
          let data = {
            id: props.data.id,
            name: props.data.name,
            description: props.data.description,
            price: item.data.price - props.price,
          };
          newCart.push({
            data: data,
            amount: item.amount - 1,
            OGprice: props.price,
          });
        } else return;
      } else {
        newCart.push(item);
      }
    });
    setCart(newCart);
  }

  return (
    <li className = {classes['cart-item']}>
        <div>
      <h2>{props.data.name}</h2>
      <div className ={classes.summary}>
      <span className={classes.price}>${props.data.price}</span>
      <span className={classes.amount}>x{props.amount}</span>
      </div>
      </div>
      <div className ={classes.actions}>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      </div>
    </li>
  );
};
export default CartItem;
