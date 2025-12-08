import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwoclothes';
import { ProductCategory } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: ProductCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashiontwoclothesSlice = createSlice({
  name: 'fashiontwoclothes',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwoclothes = { key: "fashiontwoclothes", storage };

export const persistedFashiontwoclothesReducer = persistReducer(persistConfigFashiontwoclothes,fashiontwoclothesSlice.reducer);


export default fashiontwoclothesSlice.reducer;