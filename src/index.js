import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from './redux/store/store'
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL =
  process.env.REACT_APP_ENV === "prod"
    ? "localhost/api"
    : "www.example.com" && process.env.REACT_APP_ENV === "dev"
    ? "localhost/api"
    : "www.example.com" && process.env.REACT_APP_ENV === "staging"
    ? "www.exa.com"
    : "https://nodeapi.seedwill.co/api/v1/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
