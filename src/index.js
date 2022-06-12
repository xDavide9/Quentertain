import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Strict mode makes it that axios http requests in useEffect are called twice so for now it's commented
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
