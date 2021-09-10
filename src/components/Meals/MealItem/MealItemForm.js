/*
 *
 *
 * */

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        lavel="Amount"
        input={{
          id: "amount",
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
