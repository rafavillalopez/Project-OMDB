import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesReducer from "./moviesReducer";
import selectMovieReducer from "./selectedMovieReducer";
import logRegReducer from "./logRegReducer";
import authReducer from "./authReducer";
import favoritesReducer from "./favoritesReducer";
import usersReducer from "./usersReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectMovieReducer,
    user: logRegReducer,
    isLoggedIn: authReducer,
    favorites: favoritesReducer,
    users: usersReducer,
  },
});

export default store;
