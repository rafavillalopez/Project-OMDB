import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { getMovioById } from "../utils/utils.global";

export const getFavorites = createAsyncThunk(
  "GET_FAVORITES",
  async (data, thunkApi) => {
    try {
      const { user } = thunkApi.getState();

      const req = await axios.get(`/api/users/${user.id}/favorites`);
      let favorites = [];
      if (req.data.length) {
        favorites = getMovioById(req.data);
      }
      return favorites;
    } catch (err) {
      throw err;
    }
  }
);

export const addFavorite = createAsyncThunk(
  "ADD_FAVORITES",
  async (movieId, thunkApi) => {
    try {
      const { user } = thunkApi.getState();
      const req = await axios.post(
        `/api/users/${user.id}/favorites/${movieId}`
      );

      return req.data;
    } catch (err) {
      throw err;
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "REMOVE_FAVORITES",
  async (movieId, thunkApi) => {
    try {
      const { user } = thunkApi.getState();
      const req = await axios.delete(
        `/api/users/${user.id}/favorites/${movieId}`
      );
      let favorites = [];
      if (req.data.length) {
        favorites = getMovioById(req.data);
      }
      return favorites;
    } catch (err) {
      throw err;
    }
  }
);

export const setFavoritesVoid = createAction("FAVORITES_NULL");

const userReducer = createReducer([], {
  [getFavorites.pending]: (state, action) => {
    return [{ msg: "creating..." }];
  },
  [getFavorites.fulfilled]: (state, action) => {
    return action.payload;
  },
  [getFavorites.rejected]: (state, action) => {
    return [
      {
        err: action.error,
      },
    ];
  },
  [addFavorite.pending]: (state, action) => {
    return [{ msg: "adding..." }];
  },
  [addFavorite.fulfilled]: (state, action) => {
    return action.payload;
  },
  [addFavorite.rejected]: (state, action) => {
    return [
      {
        err: action.error,
      },
    ];
  },
  [removeFavorite.pending]: (state, action) => {
    return [{ msg: "deleting..." }];
  },
  [removeFavorite.fulfilled]: (state, action) => {
    return action.payload;
  },
  [removeFavorite.rejected]: (state, action) => {
    return [
      {
        err: action.error,
      },
    ];
  },
  [setFavoritesVoid]: (state, action) => (state = []),
});

export default userReducer;
