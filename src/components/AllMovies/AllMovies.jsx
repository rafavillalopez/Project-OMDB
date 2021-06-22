import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MovieForm from "../MovieForm";

export default function AllMovies() {
  const { movies } = useSelector((state) => state);

  return (
    <div>
      <MovieForm />
      <ul>
        {!movies.length ? (
          <p>No entries for this title, try again.</p>
        ) : (
          movies.map((movie, i) => {
            return (
              <li key={i}>
                <Link to={`/movies/${movie["imdbID"]}`}>
                  <h2>{movie["Title"]}</h2>
                  <img
                    src={movie["Poster"]}
                    alt={`Poster: ${movie["Title"]}`}
                  />
                </Link>
              </li>
            );
          })
        )}
      </ul>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
