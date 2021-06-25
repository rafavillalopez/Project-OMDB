import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";
import Main from "./containers/Main";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Browser>
        <Route path="/" component={Main} />
      </Browser>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
