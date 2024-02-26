import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // initialstate is null when we return from addUser it will become action.payload
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
