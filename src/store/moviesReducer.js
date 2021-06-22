import {
  // createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("GET_MOVIES", async (title) => {
  const rowMovies = await axios
    .get(`https://www.omdbapi.com/?apikey=a72d9535&s=${title}`)
    .then((res) => res.data);

  if (rowMovies["Response"] === "True") return rowMovies["Search"];

  const rowMovie = axios
    .get(`https://www.omdbapi.com/?apikey=a72d9535&t=${title}`)
    .then((res) => res.data);

  if (rowMovie["Response"] === "True") return rowMovie["Search"];

  throw new Error();
});

const moviesReducer = createReducer([], {
  [getMovies.pending]: (state, action) => ["...searching"],
  [getMovies.fulfilled]: (state, action) => action.payload,
  [getMovies.rejected]: (state, action) => ["No entries for this title"],
});

export default moviesReducer;
