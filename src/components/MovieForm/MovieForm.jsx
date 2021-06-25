import React from "react";
import s from "./MovieForm.module.scss";

import useInputs from "../../hooks/useInputs";

export default function MovieForm() {

  const { value, onChange, apiMovies } = useInputs();

  return (
    <div className={s.movieFormDiv}>
      <form onSubmit={apiMovies}>
        <input
          className={s.entry}
          name="name"
          type="text"
          value={value.name}
          onChange={onChange}
          placeholder={"Movie title"}
        />
        <button className={"ant-btn " + s.left}>Search</button>
      </form>
    </div>
  );
}
