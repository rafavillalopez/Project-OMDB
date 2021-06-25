import React, { useEffect, useState } from "react";

import s from "./Home.module.scss";
import CardComponent from "../../components/Card/Card";
import { getMovioById } from "../../utils/utils.global";

export default function Home() {
  let idOfHomeHolders = [
    { movieId: "tt4154796" },
    { movieId: "tt1375666" },
    { movieId: "tt0325980" },
    { movieId: "tt0944947" },
  ];
  const [favorites, setFavorites] = useState(idOfHomeHolders);

  useEffect(() => {
    getMovioById(favorites).then((data) => setFavorites(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <p className={s.homeViews}>
        Look for your favorite movie in the input above.
      </p>
      <p className={s.homeViews}>Then, add it to your favorites.</p>
      <p className={s.homeViews}>
        And try again, loo not only for movies but series or maybe Others user
        if you click the button next to 'Search'.
      </p>

      <div className={s.specialContainer}>
        {favorites?.map((movie, i) => {
          return <CardComponent key={i} movie={movie} type={"add"} />;
        })}
      </div>
    </div>
  );
}
