import { useEffect, useReducer, useState } from "react";
import Fruits from "./components/fruits/Fruits";
import "././components/App.css";
import NewCounterForm from "./components/counter/NewCounterForm";
import CounterList from "./components/counter/CounterList";
import LoginForm from "./components/Login/LoginForm";
import TimerList from "./components/timer/TimerList";

import MainStats from "./components/stats/MainStats";

const INITIAL_STATE = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
}

const LOGIN_START = "login_start";
const SUCCESS = "success";
const ERROR = "error";
const USERNAME = "username";
const PASSWORD = "password";
const LOGOUT = "logout"

const loginReducer = (state, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      }
    case SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    case ERROR:
      return {
        ...state,
        error: "Incorrect username or password",
        isLoading: false,
        username: "",
        password: ""
      }
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: ""
      }
    default:
      return state;
  }
}


function App() {
  const [loginState, loginDispatch] = useReducer(loginReducer, INITIAL_STATE)
  const [caunterValues, setCaunterValues] = useState([]);
  const [pseudoAutoIncrement, setPseudoAutoIncrement] = useState(0);

  const login = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loginState.username === 'a' && loginState.password === 'a') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    loginDispatch({ type: LOGIN_START })
    try {
      await login();
      loginDispatch({ type: SUCCESS });
      localStorage.setItem("isLogged", true)
    }
    catch (err) {
      loginDispatch({ type: ERROR })
    }
  };


  useEffect(() => {
    const isLoggedLS = localStorage.getItem("isLogged");
    if (isLoggedLS === "true") {
      loginDispatch({ type: SUCCESS })
    }
  }, []);


  const AddCounterValueHandler = (incrementStep) => {
    setCaunterValues((prevState) => [
      ...prevState,
      { incrementStep, id: pseudoAutoIncrement + 1 },
    ]);
    setPseudoAutoIncrement((prevState) => prevState + 1);
  };

  const removeCounterHandler = (id) => {
    setCaunterValues((prevstate) => prevstate.filter((item) => item.id !== id));
  };

  const loginHandler = () => {
    // setIsLogged(true);
    loginDispatch({ type: LOGOUT })
    localStorage.setItem("isLogged", false);
  };

  return (
    <div className="App">
      <div className="login-container">
        {loginState.isLoggedIn ? (
          <div>
            <div className="logout"><button onClick={loginHandler} >Logout</button></div>
            <div className="fruits-container">
              <Fruits />
            </div>
            <div className="counter">
              <NewCounterForm onAddCounterValue={AddCounterValueHandler} />
              <CounterList
                counterValues={caunterValues}
                onRemoveCounter={removeCounterHandler}
              />
              <MainStats />
              <TimerList />


            </div>
          </div>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {loginState.error && <p className='error'>{loginState.error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={loginState.username}
              onChange={(e) => loginDispatch({ type: USERNAME, payload: e.target.value })}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={loginState.password}
              onChange={(e) => loginDispatch({ type: PASSWORD, payload: e.target.value })}
            />
            <button className='submit' type='submit' disabled={loginState.isLoading}>
              {loginState.isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>

  );
}

export default App;
