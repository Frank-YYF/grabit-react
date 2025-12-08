import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwoaccessories';
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

export const fashiontwoaccessoriesSlice = createSlice({
  name: 'fashiontwoaccessories',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwoaccessories = { key: "fashiontwoaccessories", storage };

export const persistedFashiontwoaccessoriesReducer = persistReducer(persistConfigFashiontwoaccessories,fashiontwoaccessoriesSlice.reducer);


export default fashiontwoaccessoriesSlice.reducer;