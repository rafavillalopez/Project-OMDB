import React, { useEffect, useState } from "react";

import s from "./SingleUser.module.scss";
import CardComponent from "../../components/Card/Card";
import { getMovioById } from "../../utils/utils.global";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function SingleUser() {
  const { users } = useSelector((state) => state);
  const { id } = useParams();
  const [user] = users.filter((x) => Number(x.id) === Number(id));

  const [favorites, setFavorites] = useState(user.favorites || []);

  useEffect(() => {
    getMovioById(favorites).then((data) => setFavorites(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className={s.view}>{`Favorites of ${user.name}`}</h2>

      <div className={s.specialContainer}>
        {favorites?.map((movie, i) => {
          return <CardComponent key={i} movie={movie} type={"add"} />;
        })}
      </div>
    </div>
  );
}
