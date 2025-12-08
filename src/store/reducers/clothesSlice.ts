import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/clothes';
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

export const ClothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {},
});

export const persistConfigClothes = { key: "clothes", storage };

export const persistedClothesReducer = persistReducer(persistConfigClothes,ClothesSlice.reducer);

export default ClothesSlice.reducer;