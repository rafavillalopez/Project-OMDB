import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import s from "./UserView.module.scss";
import Favorites from "../Favorite/Favorites";

export default function UserView() {
  const { user, isLoggedIn, favorites } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) history.push("./");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h1 className={s.userView}>{user.name}</h1>
      <p
        className={s.userView}
      >{`You have ${favorites.length} favorites, add or remove as many as you want!!!`}</p>
      <Favorites />
    </div>
  );
}
