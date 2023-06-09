import "./index.css";
import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
localStorage.getItem("theme") === "dark"
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
