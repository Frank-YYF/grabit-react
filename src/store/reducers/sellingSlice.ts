import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/selling';
import { Selling } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Selling[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const sellingSlice = createSlice({
  name: 'selling',
  initialState,
  reducers: {},
});

export const persistConfigSelling = { key: "selling", storage };

export const persistedSellingReducer = persistReducer(persistConfigSelling,sellingSlice.reducer);

export default sellingSlice.reducer;