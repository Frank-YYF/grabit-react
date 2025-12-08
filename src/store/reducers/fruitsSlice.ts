import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fruits';
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

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {},
});

export const persistConfigFruits = { key: "fruits", storage };

export const persistedFruitsReducer = persistReducer(persistConfigFruits,fruitsSlice.reducer);


export default fruitsSlice.reducer;