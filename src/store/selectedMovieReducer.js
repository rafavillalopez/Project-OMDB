import {
  // createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const selectMovie = createAsyncThunk("SELECT_MOVIE", async (id) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=a72d9535&i=${id}&plot=full`
  );
  return res.data;
});

const selectMovieReducer = createReducer([], {
  [selectMovie.pending]: (state, action) => ["searching..."],
  [selectMovie.fulfilled]: (state, action) => action.payload,
  [selectMovie.rejected]: (state, action) => ["No entries for this title"],
});

export default selectMovieReducer;
