import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals bg" />
      </div>
    </Fragment>
  );
};

export default Header;
