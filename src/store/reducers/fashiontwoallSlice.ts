import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwoall';
import { ProductCategory } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: ProductCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashiontwoallSlice = createSlice({
  name: 'fashiontwoall',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwoall = { key: "fashiontwoall", storage };

export const persistedFashiontwoallReducer = persistReducer(persistConfigFashiontwoall,fashiontwoallSlice.reducer);


export default fashiontwoallSlice.reducer;