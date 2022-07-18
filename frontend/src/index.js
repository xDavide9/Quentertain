import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Strict mode makes it that axios http requests in useEffect are called twice so for now it's commented
  //<React.StrictMode>
  <Router>
    <App />
  </Router>
  //</React.StrictMode>
);
