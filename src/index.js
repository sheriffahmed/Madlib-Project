import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";
import "./styles.css";


render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


