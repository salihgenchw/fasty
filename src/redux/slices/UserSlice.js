import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  avatar: "",
  token: "",
  fcmToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.userName;
      state.avatar = action.payload.avatar;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
});

export const { setUser, setToken, setFcmToken } = userSlice.actions;
export const userReducer = userSlice.reducer;
