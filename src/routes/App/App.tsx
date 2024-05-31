import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Root } from "../Root";
import { Login } from "../Login/Login";
import TasksManager from "../TasksManager/TasksManager";
import UserProvider from "../../context/UserProvider";

export const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="home" element={<TasksManager />} />
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
