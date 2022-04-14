import { useState, useReducer } from "react";

const INCREMENT_ONE = "increment_one";
const INCREMENT_N = "increment_n";
const DECREMENT_ONE = "decrement_one";
const DECREMENT_N = "decrement_n";
const RESET = "reset";

const InitialState = {
  counterValue: 0,
  incrementAcountCount: 0,
  decrementAcountCount: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_ONE:
      return {
        ...state,
        counterValue: state.counterValue + 1,
        incrementAcountCount: state.incrementAcountCount + 1,
      };
    case INCREMENT_N:
      return {
        ...state,
        counterValue: state.counterValue + action.payload,
        incrementAcountCount: state.incrementAcountCount + 1,
      }
    case DECREMENT_ONE:
      return {
        ...state,
        counterValue: state.counterValue - 1,
        decrementAcountCount: state.decrementAcountCount + 1,
      }
    case DECREMENT_N:
      return {
        ...state,
        counterValue: state.counterValue - action.payload,
        decrementAcountCount: state.decrementAcountCount + 1,
      }
    case RESET:
      return InitialState;
    default:
      return state;
  }
}


const Counter = (props) => {
  const [counter, dispatch] = useReducer(reducer, InitialState);

  const incrementOneHandler = () => {
    dispatch({ type: INCREMENT_ONE });
  };

  const incrementNHandler = () => {
    dispatch({ type: INCREMENT_N, payload: props.incrementStep })
  };

  const decrementOneHandler = () => {
    dispatch({ type: DECREMENT_ONE });
  };

  const decrementNHandler = () => {
    dispatch({ type: DECREMENT_N, payload: props.incrementStep })
  };


  return (
    <>
      <h2>Counter</h2>

      <div>{`Increment action count: ${counter.incrementAcountCount}`}</div>

      <div>{`Decrement acount count: ${counter.decrementAcountCount}`}</div>

      <div>{counter.counterValue}</div>

      <button onClick={incrementOneHandler}> Increment 1 </button>

      <button onClick={incrementNHandler}> {`Increment ${props.incrementStep}`} </button>

      <button onClick={decrementOneHandler}> Decrement 1 </button>

      <button onClick={decrementNHandler}> {`Decrement ${props.incrementStep}`} </button>

      <button onClick={() => { dispatch({ type: RESET }) }} > Reset </button>

    </>
  );
};

export default Counter;
