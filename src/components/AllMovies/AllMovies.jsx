import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../Card/Card";
import { movie } from "../../utils/utils.global";
import useLoading from "../../hooks/useLoading";

export default function AllMovies() {
  const { movies } = useSelector((state) => state);
  const { loading } = useLoading();

  if (!movies.length) {
    return (
      <div className="container">
        <CardComponent movie={movie} type="add" loading={loading} />
      </div>
    );
  }

  return (
    <div className="container">
      {movies.map((movie, i) => (
        <CardComponent key={i} movie={movie} type="add" />
      ))}
    </div>
  );

}
