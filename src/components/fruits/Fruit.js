import React, { useState } from "react";
import Modal from "../overlays/Modal";

const Fruit = ({ name, native, color }) => {
  const [showModalFruit, setShowModalFruit] = useState(false);

  const buttonClickHandler = () => {
    setShowModalFruit(true);
  };

  return (
    <>
      <div>
        <h2> Fruit: </h2>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Native: </b>
          {native}
        </p>
        <p>
          <b>Color: </b>
          {color}
        </p>
        <button onClick={buttonClickHandler}>Change the name</button>
      </div>
      {showModalFruit && (
        <Modal
          message="Name changed"
          onClose={() => setShowModalFruit(false)}
        />
      )}
    </>
  );
};

export default Fruit;
