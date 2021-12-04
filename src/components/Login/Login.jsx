import { useState } from "react";
import React from "react";
import "./Login.css";
import md5 from "md5";
import ErrorModal from "../Modals/ErrorModal";
import Card from '../UI/Card.jsx'

const Login = ({ setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((username.length !== 0 && password.length !== 0) &&
      md5(username) === "21232f297a57a5a743894a0e4a801fc3" &&
      md5(password) === "21232f297a57a5a743894a0e4a801fc3"
    ) {
      setToken({ token: 12345 });
    } else {
      setUserName("");
      setPassword("");
      setError({
        title: "Invalid username",
        message: "Please enter valid credentials",
      });
    }
  };

  return (
    <Card>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className="login">
        <form onSubmit={handleSubmit}>
          <p> User name </p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          ></input>
          <p> Password </p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </Card >
  );
};

export default Login;