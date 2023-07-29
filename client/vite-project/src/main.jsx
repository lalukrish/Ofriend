import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/Store.jsx";

// Use createRoot from 'react-dom/client'
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
