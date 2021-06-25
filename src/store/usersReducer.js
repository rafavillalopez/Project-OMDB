import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "GET_USERS",
  async (data) => {
    try {
      const req = await axios.get(`/api/users?name=${data}`);
      return req.data;
    } catch (err) {
      throw err;
    }
  }
);

const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;
