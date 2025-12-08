import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/latestblog';
import { Blog } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const latestblogSlice = createSlice({
  name: 'latestblog',
  initialState,
  reducers: {},
});

export const persistConfigLatestblog = { key: "latestblog", storage };

export const persistedLatestblogReducer = persistReducer(persistConfigLatestblog,latestblogSlice.reducer);

export default latestblogSlice.reducer;