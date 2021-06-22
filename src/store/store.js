import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./movies";
import selectMovieReducer from "./selectedMovie";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectMovieReducer,
  },
});

export default store;
