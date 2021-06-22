import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";
import Main from "./containers/Main";
import AllMovies from "./components/AllMovies/AllMovies";
import SingleMovie from "./components/SingleMovie";
import Register from "./components/Register";
import Loggin from "./components/Loggin";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Browser>
        <Route exact path="/" component={Main} />
        <Route exact path="/movies" component={AllMovies} />
        <Route path="/movies/:id" component={SingleMovie} />
        <Route path="/register" component={Register} />
        <Route path="/loggin" component={Loggin} />
      </Browser>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
