// import { useEffect, useState } from "react";
// import Fruits from "./components/fruits/Fruits";
// import "././components/App.css";
// import NewCounterForm from "./components/counter/NewCounterForm";
// import CounterList from "./components/counter/CounterList";
// import LoginForm from "./components/Login/LoginForm";
// import TimerList from "./components/timer/TimerList";
// import TimerListtt from "./components/Timer2/TimerListtt";

// function App() {
//     const [caunterValues, setCaunterValues] = useState([]);
//     const [pseudoAutoIncrement, setPseudoAutoIncrement] = useState(0);
//     const [isLogged, setIsLogged] = useState(false);

//     useEffect(() => {
//         const isLoggedLS = localStorage.getItem("isLogged");
//         if (isLoggedLS === "true") {
//             setIsLogged(true);
//         } else {
//             setIsLogged(false)
//         }
//     }, []);


//     const AddCounterValueHandler = (incrementStep) => {
//         setCaunterValues((prevState) => [
//             ...prevState,
//             { incrementStep, id: pseudoAutoIncrement + 1 },
//         ]);
//         setPseudoAutoIncrement((prevState) => prevState + 1);
//     };

//     const removeCounterHandler = (id) => {
//         setCaunterValues((prevstate) => prevstate.filter((item) => item.id !== id));
//     };

//     const loginHandler = () => {
//         setIsLogged(true);
//         localStorage.setItem("isLogged", true);
//     };

//     return (
//         <>
//             {isLogged ? (
//                 <>
//                     <div className="App"></div>
//                     <div className="fruits-container">
//                         <Fruits />
//                     </div>
//                     <div className="counter">
//                         <NewCounterForm onAddCounterValue={AddCounterValueHandler} />
//                         <CounterList
//                             counterValues={caunterValues}
//                             onRemoveCounter={removeCounterHandler}
//                         />
//                         <TimerList />
//                         <TimerListtt />
//                     </div>

//                 </>
//             ) : (
//                 <LoginForm onLogin={loginHandler} />
//             )}

//         </>
//     );
// }

// export default App;
