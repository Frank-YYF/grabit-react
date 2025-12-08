import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiondeal';
import { FashionDeal } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface InitialState {
  data: FashionDeal[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashiondealSlice = createSlice({
  name: 'fashiondeal',
  initialState,
  reducers: {},
});

export const persistConfigFashiondeal = { key: "fashiondeal", storage };

export const persistedFashiondealReducer = persistReducer(persistConfigFashiondeal,fashiondealSlice.reducer);

export default fashiondealSlice.reducer;