import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/snack';
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

export const snackSlice = createSlice({
  name: 'snack',
  initialState,
  reducers: {},
});

export const persistConfigSnack= { key: "snack", storage };

export const persistedSnackReducer = persistReducer(persistConfigSnack,snackSlice.reducer);

export default snackSlice.reducer;