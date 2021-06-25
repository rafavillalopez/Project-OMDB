import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PageHeaderComponent from "./Header/PageHeader";
import AllMovies from "../components/AllMovies/AllMovies";
import SingleMovie from "../components/SingleMovie/SingleMovie";
import Register from "../components/RegisterLogin/Register";
import Loggin from "../components/RegisterLogin/Loggin";
import UserView from "./UserView/UserView";
import Home from "./Home/Home";

export default function Main() {
  return (
    <>
      <PageHeaderComponent />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/movies" component={AllMovies} />
        <Route path="/movies/:id" component={SingleMovie} />
        <Route path="/register" component={Register} />
        <Route path="/loggin" component={Loggin} />
        <Route path="/user" component={UserView} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}
