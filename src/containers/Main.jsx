import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import PageHeaderComponent from "./Header/PageHeader";
import AllMovies from "../components/AllMovies/AllMovies";
import SingleMovie from "../components/SingleMovie/SingleMovie";
import Register from "../components/RegisterLogin/Register";
import Loggin from "../components/RegisterLogin/Loggin";
import Users from "../components/Users/Uers";
import UserView from "../components/UserView/UserView";
import Home from "./Home/Home";
import SingleUser from "../components/SingleUser/SingleUser";

import { useDispatch } from "react-redux";
import { setLogginFalse, setLogginTrue } from "../store/authReducer";
import { setUser } from "../store/logRegReducer";

export default function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(setUser()).then((data) => {
      if (data.payload && data.payload.id) {
        dispatch(setLogginTrue());
        return history.push("/user");
      }
      if (data.error) {
        dispatch(setLogginFalse());
      }
    });
  }, [dispatch, history]);

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
        <Route exact path="/users" component={Users} />
        <Route path="/users/:id" component={SingleUser} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}
