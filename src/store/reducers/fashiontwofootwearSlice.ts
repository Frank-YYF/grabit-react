import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwofootwear';
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

export const fashiontwofootwearSlice = createSlice({
  name: 'fashiontwofootwear',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwofootwear = { key: "fashiontwofootwear", storage };

export const persistedFashiontwofootwearReducer = persistReducer(persistConfigFashiontwofootwear,fashiontwofootwearSlice.reducer);


export default fashiontwofootwearSlice.reducer;