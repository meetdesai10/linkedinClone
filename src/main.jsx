import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store.jsx";
import Desai from "./Desai.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        {/* <App /> */}
        <Desai/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
