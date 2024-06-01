import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "./styles.css";

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
        <h1 className="title-task-manager">Task Manager</h1>
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
          <Password
            id="password"
            className="input-password"
            variant="filled"
            value={inputPassword}
            onChange={handlePasswordInputChange}
            feedback={false}
            tabIndex={1}
          />
        </div>
        <Link to="/home" className="p-button button" onClick={handleLogin}>
          Login
        </Link>
      </div>
    </div>
  );
};
