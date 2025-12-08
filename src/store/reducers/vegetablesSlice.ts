import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/vegetables';
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

export const vegetablesSlice = createSlice({
  name: 'vegetables',
  initialState,
  reducers: {},
});

export const persistConfigVegetables = { key: "vegetables", storage };

export const persistedVegetablesReducer = persistReducer(persistConfigVegetables,vegetablesSlice.reducer);

export default vegetablesSlice.reducer;