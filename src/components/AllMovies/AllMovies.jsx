import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../Card/Card";

export default function AllMovies() {
  const { movies } = useSelector((state) => state);

  return (
    <div className="container">
      {!movies.length ? (
        <p>No entries for this title, try again.</p>
      ) : (
        movies.map((movie, i) => {
          return <CardComponent key={i} movie={movie} type={"add"} />;
        })
      )}
    </div>
  );
}
