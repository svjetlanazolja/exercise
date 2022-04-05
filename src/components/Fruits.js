import React, { useState } from "react";
import Fruit from "./Fruit";
import Form from "./Form";

const INITIAL_FRUITS = [
  {
    id: 1,
    name: "Banana",
    native: "Asia",
    color: "yellow",
  },
  {
    id: 2,
    name: "Apple",
    native: "Asia",
    color: "red",
  },
  {
    id: 3,
    name: "Pear",
    native: "Europe",
    color: "yellow",
  },
];

const Fruits = () => {
  const [fruit, setFruit] = useState(INITIAL_FRUITS);

  const addFruitHandler = (fruit) => {
    setFruit((prevState) => [
      {
        ...fruit,
        id: prevState.length + 1,
      },
      ...prevState,
    ]);
  };

  return (
    <>
      <div className="form-fruit">
        <Form onAddFruit={addFruitHandler} />
      </div>

      <div className="fruit-list-container">
        {fruit.map((fruit) => (
          <Fruit
            key={fruit.id}
            name={fruit.name}
            native={fruit.native}
            color={fruit.color}
          />
        ))}
      </div>
    </>
  );
};

export default Fruits;
