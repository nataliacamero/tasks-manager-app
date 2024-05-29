import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root";
import TasksManager from "../TasksManager/TasksManager";
import { Login } from "../Login/Login";

export const App: React.FC = () => {
  //TODO: Add errorpage
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} />
        <Route path="home" element={<TasksManager />} />
        <Route path="login" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};
