import React from "react";
import { useState } from "react";

const NewCounterForm = (props) => {
  const [incrementStep, setIncrementStep] = useState("");

  const incrementChangeHandler = (e) => {
    setIncrementStep(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddCounterValue(incrementStep);
    // console.log(incrementStep);
    setIncrementStep("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        min={0}
        onChange={incrementChangeHandler}
        value={incrementStep}
      />
      <button type="submit">Add new counter</button>
    </form>
  );
};

export default NewCounterForm;
