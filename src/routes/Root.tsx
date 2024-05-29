import React from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";

export const Root: React.FC = () => {
  const isLogged = true;
  return (
    <>
      <h1 className="title">¡Welcome!</h1>
      <nav className="container-welcome">
        {isLogged ? (
          <a href="/home" rel="noopener noreferrer" className="home-text font-bold">
            Task Manager <i className="pi pi-chevron-right icon-chevrone "></i>
          </a>
        ) : (
          <a href="/login" rel="noopener noreferrer" className="home-text font-bold">
            <i className="pi pi-user icon-user"></i>Login
          </a>
        )}
      </nav>
      <Outlet />
    </>
  );
};
