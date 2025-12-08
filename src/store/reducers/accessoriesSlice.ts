import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/accessories';
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

export const AccessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {},
});

export const persistConfigAccessories = { key: "accessories", storage };

export const persistedAccessoriesReducer = persistReducer(persistConfigAccessories,AccessoriesSlice.reducer);

export default AccessoriesSlice.reducer;