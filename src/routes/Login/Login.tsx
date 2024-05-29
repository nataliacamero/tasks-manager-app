import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./styles.css";

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    alert(event.target.value);
    setUsername(event.target.value);
  };
  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    alert(event.target.value);
    setPassword(event.target.value);
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
          <label htmlFor="username">Username</label>
          <InputText
            id="username"
            value={username}
            placeholder="enter your user name"
            aria-describedby="username-help"
            onChange={handleUsernameInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="username">Password</label>
          <InputText
            id="password"
            value={password}
            placeholder="enter your password"
            aria-describedby="password-help"
            onChange={handlePasswordInputChange}
          />
        </div>
        <a href="home" rel="noopener noreferrer" className="p-button button">
          Login
        </a>
      </div>
    </div>
  );
};
