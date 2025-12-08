import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashionblog';
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

export const fashionblogSlice = createSlice({
  name: 'fashionblog',
  initialState,
  reducers: {},
});

export const persistConfigFashionblog = { key: "fashionblog", storage };

export const persistedFashionblogReducer = persistReducer(persistConfigFashionblog,fashionblogSlice.reducer);

export default fashionblogSlice.reducer;