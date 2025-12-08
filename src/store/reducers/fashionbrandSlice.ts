import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/fashionbrand';
import { GroupBrand } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupBrand[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashionbrandSlice = createSlice({
  name: 'fashionbrand',
  initialState,
  reducers: {},
});

export const persistConfigFashionbrand = { key: "fashionbrand", storage };

export const persistedFashionbrandReducer = persistReducer(persistConfigFashionbrand,fashionbrandSlice.reducer);

export default fashionbrandSlice.reducer;