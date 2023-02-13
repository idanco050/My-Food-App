import { Fragment } from "react";
import image from "../images/food.jpg";
import classes from "./Header.module.css";
import Button from "./Button";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Idan's Meals</h1>
        <Button label="Cart" showCart={props.showCart}></Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meals" className={classes.img}></img>
      </div>
    </Fragment>
  );
};

export default Header;
