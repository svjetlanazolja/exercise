import { useState, useRef } from "react";
import Modal from "./overlays/Modal";

const Form = (props) => {
  const [isModalShow, SetIsModalShow] = useState(false);
  const nameRef = useRef();
  const nativeRef = useRef();
  const colorRef = useRef();

  // const [fruit, setFruit] = useState({ name: "", native: "", color: "" });

  // const nameChandeHandler = (event) => {
  //   setFruit({
  //     ...fruit,
  //     name: event.target.value,
  //   });
  // };

  // const nativeChangeHandler = (event) => {
  //   setFruit({
  //     ...fruit,
  //     native: event.target.value,
  //   });
  // };

  // const colorChangeHandler = (event) => {
  //   setFruit({
  //     ...fruit,
  //     color: event.target.value,
  //   });
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const newFruit = {
  //     name: fruit.name,
  //     native: fruit.native,
  //     color: fruit.color,
  //   };
  //   props.onAddFruit(newFruit);
  //   setFruit({
  //     name: "",
  //     native: "",
  //     color: "",
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const newFruit = {
      name: nameRef.current.value,
      native: nativeRef.current.value,
      color: colorRef.current.value,
    };
    props.onAddFruit(newFruit);
    SetIsModalShow(true);
  };

  // return (
  //   <form onSubmit={submitHandler} className="form-container">
  //     <h1>Add new fruit</h1>
  //     <label>Name: </label>
  //     <input onChange={nameChandeHandler} value={fruit.name} />
  //     <label>Native: </label>
  //     <input onChange={nativeChangeHandler} value={fruit.native} />
  //     <label>Color: </label>
  //     <input onChange={colorChangeHandler} value={fruit.color} />
  //     <button className="fruit-button"> Add fruit </button>
  //   </form>
  // );

  return (
    <>
      <form onSubmit={submitHandler} className="form-container">
        <h1>Add new fruit</h1>
        <label>Name: </label>
        <input ref={nameRef} />
        <label>Native: </label>
        <input ref={nativeRef} />
        <label>Color: </label>
        <input ref={colorRef} />
        <button type="submit" className="fruit-button">
          Add fruit
        </button>
      </form>
      {isModalShow && (
        <Modal message="Person added" onClose={() => SetIsModalShow(false)} />
      )}
    </>
  );
};

export default Form;
