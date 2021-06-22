import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import useInput from "../hooks/useInput";
import { getMovies } from "../store/moviesReducer";

export default function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { value, onChange} = useInput();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies(value));
    history.push("/movies")
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={"Movie title"}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
