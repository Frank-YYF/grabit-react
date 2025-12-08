import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashionall';
import { ProductItem } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: ProductItem[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const FashionallSlice = createSlice({
  name: 'fashionall',
  initialState,
  reducers: {},
});

export const persistConfigFashionall = { key: "fashionall", storage };

export const persistedFashionallReducer = persistReducer(persistConfigFashionall,FashionallSlice.reducer);

export default FashionallSlice.reducer;