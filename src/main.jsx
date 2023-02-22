import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { store } from "../src/app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
