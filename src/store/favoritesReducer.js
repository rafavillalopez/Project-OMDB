import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk(
  "GET_FAVORITES",
  async (userId) => {
    try {
      const req = await axios.get(`/api/user/${userId}/favorites`);

      const createdUser = req.data;

      return createdUser;
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
      const req = await axios.post(`/api/user/${user.id}/favorites/${movieId}`);

      const newFavorites = req.data;

      return newFavorites;
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
        `/api/user/${user.id}/favorites/${movieId}`
      );

      const newFavorites = req.data;

      return newFavorites;
    } catch (err) {
      throw err;
    }
  }
);

const userReducer = createReducer([], {
  [getFavorites.pending]: (state, action) => {
    return { msg: "creating..." };
  },
  [getFavorites.fulfilled]: (state, action) => {
    return action.payload;
  },
  [getFavorites.rejected]: (state, action) => {
    return {
      err: action.error,
    };
  },
  [addFavorite.pending]: (state, action) => {
    return { msg: "adding..." };
  },
  [addFavorite.fulfilled]: (state, action) => {
    return action.payload;
  },
  [addFavorite.rejected]: (state, action) => {
    return {
      err: action.error,
    };
  },
  [removeFavorite.pending]: (state, action) => {
    return { msg: "deleting..." };
  },
  [removeFavorite.fulfilled]: (state, action) => {
    return action.payload;
  },
  [removeFavorite.rejected]: (state, action) => {
    return {
      err: action.error,
    };
  },
});

export default userReducer;
