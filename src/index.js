import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import "./styles.css";


render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// export default styles;

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
