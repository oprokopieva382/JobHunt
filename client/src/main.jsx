import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { customFetch } from "./utils/customFetch.js";

const res = await customFetch.get("test")
console.log(res);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
