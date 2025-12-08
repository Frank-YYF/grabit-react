import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUserData: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { logout, login, setUserData } = registrationSlice.actions;

export const persistConfigRegistration = { key: "registration", storage };

export const persistedRegistrationReducer = persistReducer(persistConfigRegistration,registrationSlice.reducer);

export default registrationSlice.reducer;
