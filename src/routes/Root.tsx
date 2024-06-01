import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import { UserContext } from "../context/UserContext";
export const Root: React.FC = () => {
  const { userName } = useContext(UserContext);
  const isLogged = !!userName;
  return (
    <>
      <h1 className="title">¡Welcome!</h1>
      <nav className="container-welcome">
        {isLogged ? (
          <Link to="/home" className="home-text">
            Task Manager <i className="pi pi-chevron-right icon-chevrone "></i>
          </Link>
        ) : (
          <Link to="/login" className="home-text">
            <i className="pi pi-user icon-user"></i> Login
          </Link>
        )}
      </nav>

      <Outlet />
    </>
  );
};
