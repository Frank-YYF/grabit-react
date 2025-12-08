import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/productimage';
import { ProductImage } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: ProductImage[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const productimageSlice = createSlice({
  name: 'productimage',
  initialState,
  reducers: {},
});

export const persistConfigProductimage = { key: "productimage", storage };

export const persistedProductimageReducer = persistReducer(persistConfigProductimage,productimageSlice.reducer);

export default productimageSlice.reducer;