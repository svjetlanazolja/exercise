import { useEffect, useState } from "react";

export const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (username.length > 5 && password.length > 5) {
      setIsInputValid(true);
    }
  }, [username, password]);

  return (
    <div className="modal modal-overlay">
      <section className="modal-main">
        <label>Username: </label>
        <input onChange={userNameChangeHandler} value={username} />
        <label>Password: </label>
        <input onChange={passwordChangeHandler} value={password} />
        <button disabled={!isInputValid} onClick={props.onLogin}>
          Login
        </button>
      </section>
    </div>
  );
};

export default LoginForm;
