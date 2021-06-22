import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesReducer from "./moviesReducer";
import selectMovieReducer from "./selectedMovieReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectMovieReducer,
    user: userReducer,
    isLoggedIn: authReducer,
  },
});

export default store;
