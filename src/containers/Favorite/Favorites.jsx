import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./Favorites.module.scss";
import CardComponent from "../../components/Card/Card";
import { getFavorites } from "../../store/favoritesReducer";

export default function Favorites() {
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <div className={s.specialContainer}>
      {favorites?.map((movie, i) => {
        return <CardComponent key={i} movie={movie} type={"remove"} />;
      })}
    </div>
  );
}
