import { Fragment, useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./CartContext";

const Button = (props) => {
  const { cart } = useContext(CartContext);

  let totalItems = 0;
  cart.map((item) => {
    totalItems += item.amount;
  });
  return (
    <Fragment>
      <button className={classes.button} onClick={props.showCart}>
        {"Cart"}
        <span className={classes.badge}>{totalItems}</span>
      </button>
    </Fragment>
  );
};

export default Button;
