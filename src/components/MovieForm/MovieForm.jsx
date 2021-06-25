import React, { useState } from "react";
import s from "./MovieForm.module.scss";

import useInputs from "../../hooks/useInputs";

export default function MovieForm() {
  const { value, onChange, apiMovies, dbUsers } = useInputs();
  const [searchUsers, setSearchUsers] = useState(false);

  const changeAction = () => {
    setSearchUsers((state) => !state);
  };

  return (
    <div className={s.movieFormDiv}>
      <form onSubmit={searchUsers ? dbUsers : apiMovies}>
        <input
          className={s.entry}
          name="name"
          type="text"
          value={value.name}
          onChange={onChange}
          placeholder={"Movie title"}
        />
        <button className={"ant-btn"} type="button" onClick={changeAction}>
          {searchUsers ? "Users" : "Movies"}
        </button>
        <button className={"ant-btn " + s.left} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
