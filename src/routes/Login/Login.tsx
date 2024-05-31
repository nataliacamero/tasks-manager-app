import React, { useContext, useState } from "react";
import { InputText } from "primereact/inputtext";
import "./styles.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Login: React.FC = () => {
  const { setUserName, setUserPassword } = useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setInputName(event.target.value);
  };
  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setInputPassword(event.target.value);
  };

  const handleLogin = () => {
    setUserName(inputName);
    setUserPassword(inputPassword);
  };

  return (
    <div className="container-general">
      <div className="header">
        <h1>TASK MANAGER APP</h1>
        <h2>Practica 2</h2>
        <h3>Programa Semilla React js</h3>
      </div>
      <div className="container">
        <div className="input-container">
          <label htmlFor="name">Username</label>
          <InputText
            id="name"
            value={inputName}
            placeholder="enter your user name"
            aria-describedby="username-help"
            onChange={handleUsernameInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <InputText
            id="password"
            value={inputPassword}
            placeholder="enter your password"
            aria-describedby="password-help"
            onChange={handlePasswordInputChange}
          />
        </div>
        <Link to="/home" className="p-button button" onClick={handleLogin}>
          Login
        </Link>
      </div>
    </div>
  );
};
