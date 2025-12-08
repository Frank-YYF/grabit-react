import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/productall';
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

export const productallSlice = createSlice({
  name: 'productall',
  initialState,
  reducers: {},
});

export const persistConfigProductall = { key: "productall", storage };

export const persistedProductallReducer = persistReducer(persistConfigProductall,productallSlice.reducer);


export default productallSlice.reducer;