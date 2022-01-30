import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Vi importerar bootstrap efter scss filen för att få vår css fil vara i första prio.
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
