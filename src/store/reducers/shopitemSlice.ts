import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/shopitem';
import { Item } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const shopitemSlice = createSlice({
  name: 'shopitem',
  initialState,
  reducers: {},
});

export const persistConfigShopitem = { key: "shopitem", storage };

export const persistedShopitemReducer = persistReducer(persistConfigShopitem,shopitemSlice.reducer);

export default shopitemSlice.reducer;