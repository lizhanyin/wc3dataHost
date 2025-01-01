// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    title: "WC3 Data Viewer",
    navTitle: {name: "WC3 Data", href: "/"},
  },
  reducers: {
    setTitle: (state, action) => { state.title = action.payload; },
    setNavTitle: (state, action) => { state.navTitle = action.payload; },
  }
});

export const { setTitle, setNavTitle } = globalSlice.actions;

const store = configureStore({ reducer: { global: globalSlice.reducer } });

export default store;
