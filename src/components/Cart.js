import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CheckOutForm from './CheckOutForm'
const Cart = (props) => {
  const { cart, setCart} = useContext(CartContext);
  const [amonut, setAmount] = useState(0);

  useEffect(() => {
    let curAmount = 0;
    cart.forEach((element) => {
      curAmount += element.data.price;
    });
    setAmount(curAmount);
  }, [cart]);

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cart.map((item, index) => {
          return (
            <CartItem
              data={item.data}
              amount={item.amount}
              price={item.OGprice}
              key={index}
            ></CartItem>
          );
        })}
      </ul>
      <CheckOutForm totalAmount = {amonut} hide = {props.hideCart} items = {cart} reset ={setCart}></CheckOutForm>
    </Modal>
  );
};

export default Cart;
