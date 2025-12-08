import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/shopcategory';
import { Shop } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Shop[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const shopByCategorySlice = createSlice({
  name: 'shopbycategory',
  initialState,
  reducers: {},
});

export const persistConfigShopBycategory = { key: "shopbycategory", storage };

export const persistedShopByCategoryReducer = persistReducer(persistConfigShopBycategory,shopByCategorySlice.reducer);

export default shopByCategorySlice.reducer;