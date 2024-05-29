import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./routes/App/App";
import "./globalStyles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
