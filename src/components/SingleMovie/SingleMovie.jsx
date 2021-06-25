import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import s from "./SingleMovie.module.scss";
import CardComponent from "../Card/Card";
import InfoCard from "../Card/InfoCard";
import { selectMovie } from "../../store/selectedMovieReducer";

export default function SingleMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedMovie } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(selectMovie(id));
  }, [dispatch, id]);

  console.log(selectedMovie["Title"]);

  return (
    <>
      <div className="container ">
        <CardComponent movie={selectedMovie} type="add" />
        <InfoCard movie={selectedMovie} />
      </div>
      <button
        className={"ant-btn ant-btn-primary " + s.btn}
        onClick={() => {
          history.push("/movies");
        }}
      >
        Back To Movies
      </button>
    </>
  );
}
