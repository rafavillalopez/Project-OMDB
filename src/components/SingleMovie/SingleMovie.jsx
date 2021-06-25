import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import CardComponent from "../Card/Card";
import InfoCard from "../Card/InfoCard";
import { selectMovie } from "../../store/selectedMovieReducer";
import useLoading from "../../hooks/useLoading";
import { movie } from "../../utils/utils.global";

export default function SingleMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedMovie } = useSelector((state) => state);
  const { loading } = useLoading();

  useEffect(() => {
    dispatch(selectMovie(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <>
        <div className="container">
          <CardComponent movie={movie} loading={loading} type="add" />
          <InfoCard movie={movie} loading={true} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <CardComponent movie={selectedMovie} type="add" />
        <InfoCard movie={selectedMovie} />
      </div>
    </>
  );
}
