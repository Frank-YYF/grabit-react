import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/shopcolor';
import { Weight } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Weight[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const shopByColorSlice = createSlice({
  name: 'shopByColor',
  initialState,
  reducers: {},
});

export const persistConfigShopByColor = { key: "shopByColor", storage };

export const persistedShopByColorReducer = persistReducer(persistConfigShopByColor,shopByColorSlice.reducer);

export default shopByColorSlice.reducer;