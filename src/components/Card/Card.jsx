import React from "react";
import { Card, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import s from "./Card.module.scss";
import { StarOutlined, DeleteFilled } from "@ant-design/icons";
import { addFavorite, removeFavorite } from "../../store/favoritesReducer";
import { isInFavorites } from "./utils";

export default function CardComponent({ movie, type }) {
  const { Meta } = Card;
  const { isLoggedIn, favorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlefavoriteAdd = () => {
    if (isLoggedIn) {
      dispatch(addFavorite(movie["imdbID"])).then(() =>
        message.success(`Added to Favorites`)
      );
    } else {
      message.info(`You have to be Log In`);
    }
  };

  const handlefavoriteRemove = () => {
    if (isLoggedIn) {
      dispatch(removeFavorite(movie["imdbID"])).then(() =>
        message.error(`Removed to Favorites`)
      );
    } else {
      message.info(`You have to be Log In`);
    }
  };
  const actions =
    type === "add" && !isInFavorites(favorites, movie["imdbID"])
      ? [<StarOutlined onClick={handlefavoriteAdd} />]
      : [<DeleteFilled onClick={handlefavoriteRemove} />];

  const poster =
    movie["Poster"] === "N/A"
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png"
      : movie["Poster"];
  return (
    <div className={s.movie}>
      <Card
        hoverable
        style={{ width: 250, borderRadius: 20 }}
        cover={
          <Link to={`/movies/${movie["imdbID"]}`}>
            <img
              className={s.imagen}
              width={250}
              alt={`Poster: ${movie["Title"]}`}
              src={poster}
            />
          </Link>
        }
        actions={actions}
      >
        <Meta title={movie["Title"]} description={movie["Type"]} />
      </Card>
    </div>
  );
}
