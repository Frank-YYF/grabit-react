import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashionselling';
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

export const fashionsellingSlice = createSlice({
  name: 'fashionselling',
  initialState,
  reducers: {},
});

export const persistConfigFashionselling = { key: "fashionselling", storage };

export const persistedFashionsellingReducer = persistReducer(persistConfigFashionselling,fashionsellingSlice.reducer);

export default fashionsellingSlice.reducer;