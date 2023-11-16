// import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css"

// ReactDom.render(<App/>, document.getElementById("root"))
const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);
root.render(
    <App />
);