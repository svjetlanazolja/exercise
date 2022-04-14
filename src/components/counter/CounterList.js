import Counter from "./Counter";

const CounterList = (props) => {
  return (
    <>
      {props.counterValues.map((counterValue) => (
        <Counter
          onRemoveCounter={props.onRemoveCounter}
          id={counterValue.id}
          key={counterValue.id}
          incrementStep={counterValue.incrementStep}
        />

        // <Counter key={Math.random().toString()} incrementStep={counterValue} />
        // <Counter incrementStep={counterValue} />
      ))}
    </>
  );
};

export default CounterList;
