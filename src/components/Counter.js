import { useState } from "react";

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.incrementStep);

  const incrementOneHandler = () => {
    setCounterValue((prevState) => prevState + 1);
  };

  const incrementNHandler = () => {
    setCounterValue((prevState) => prevState + props.incrementStep);
  };

  const removeCounterHandler = () => {
    props.onRemoveCounter(props.id);
  };

  return (
    <>
      <h2>Counter</h2>
      <div>{counterValue}</div>
      <button onClick={incrementOneHandler}> Increment 1 </button>
      <button onClick={incrementNHandler}>
        {`Increment ${props.incrementStep}`} Increment 2
      </button>
      <button onClick={removeCounterHandler}>Remove this counter</button>
    </>
  );
};

export default Counter;
