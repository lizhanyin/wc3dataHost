// store.js
import { useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    build: '',
    mainNav: [],
  },
  reducers: {
    setBuild: (state, action) => { state.build = action.payload; },
    setMainNav: (state, action) => { state.mainNav = action.payload; },
  }
});

export const { setBuild, setMainNav } = globalSlice.actions;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const store = configureStore({ reducer: { global: globalSlice.reducer } });

export default store;

/*
 * import { useDispatch, useSelector } from "react-redux";
 * 
 * const globalState = useSelector((state) => state.global);
 * <>{globalState.title}</>
 * 
 * const dispatch = useDispatch();
 * onClick={() => dispatch(setTitle('dark'))}
 */