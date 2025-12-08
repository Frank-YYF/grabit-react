import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwoblog';
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

export const fashiontwoblogSlice = createSlice({
  name: 'fashiontwoblog',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwoblog = { key: "fashiontwoblog", storage };

export const persistedFashiontwoblogReducer = persistReducer(persistConfigFashiontwoblog,fashiontwoblogSlice.reducer);


export default fashiontwoblogSlice.reducer;