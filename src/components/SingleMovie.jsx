import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { selectMovie } from "../store/selectedMovieReducer";

export default function SingleMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedMovie } = useSelector((state) => state);

  useEffect(() => {
    dispatch(selectMovie(id));
  }, [dispatch, id]);

  console.log(selectedMovie["Title"]);

  return (
    <div>
      <h2>{selectedMovie["Title"]}</h2>
      <img src={selectedMovie["Poster"]} alt={selectedMovie["Title"]} />
      {/* <button>Add To Favorites</button> */}
      <p>{selectedMovie["Plot"]}</p>
      <Link to="/movies">
        <button>Volver</button>
      </Link>
    </div>
  );
}
