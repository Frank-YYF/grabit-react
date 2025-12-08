import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashionrated';
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

export const fashionratedSlice = createSlice({
  name: 'fashionrated',
  initialState,
  reducers: {},
});

export const persistConfigFashionrated = { key: "fashionrated", storage };

export const persistedFashionratedReducer = persistReducer(persistConfigFashionrated,fashionratedSlice.reducer);

export default fashionratedSlice.reducer;