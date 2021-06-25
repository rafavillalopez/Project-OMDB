import React from "react";
import s from "./PageHeader.module.scss";
import { PageHeader, Button, message } from "antd";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieForm from "../../components/MovieForm/MovieForm";
import { logOut } from "../../store/logRegReducer";
import { setLogginFalse } from "../../store/authReducer";
import { setFavoritesVoid } from "../../store/favoritesReducer";

export default function PageHeaderComponent() {
  const history = useHistory();
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();

  const buttonsIfNotLog = [
    <Button
      className={s.btn}
      key={"signUpButton"}
      onClick={() => {
        setTimeout(() => {
          history.push("/register");
        }, 1000);
      }}
    >
      Sign Up
    </Button>,
    <Button
      className={s.btn}
      key={"logInButton"}
      type="primary"
      onClick={() => {
        setTimeout(() => {
          history.push("/loggin");
        }, 1000);
      }}
    >
      Log In
    </Button>,
  ];

  const buttonsIfLog = [
    <Button
      className={s.btn}
      key={"signUpButton"}
      onClick={() => {
        setTimeout(() => {
          history.push("/user");
        }, 1000);
      }}
    >
      My Favorites
    </Button>,
    <Button
      className={s.btn}
      key={"logOutButton"}
      type="primary"
      onClick={() => {
        dispatch(logOut())
          .then(() => {
            message.success(`Success: Come back soon`, 3);
            return dispatch(setLogginFalse());
          })
          .then(() => {
            dispatch(setFavoritesVoid());
            setTimeout(() => {
              history.push("/");
            }, 1000);
          });
      }}
    >
      Log Out
    </Button>,
  ];
  const handleBack = () => {
    if (pathname !== "/home") history.goBack();
  };
  return (
    <div className={s.wrapper}>
      <PageHeader
        onBack={handleBack}
        title={
          <div>
            <Link className={s.title} to="/">
              OMDB
            </Link>
            <MovieForm />
          </div>
        }
        extra={isLoggedIn ? buttonsIfLog : buttonsIfNotLog}
      ></PageHeader>
    </div>
  );
}
