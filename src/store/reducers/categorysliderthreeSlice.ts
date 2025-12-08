import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/categorysliderthree';
import { Category } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const categorysliderthreeSlice = createSlice({
  name: 'categorysliderthree',
  initialState,
  reducers: {},
});

export const persistConfigCategorysliderthree = { key: "categorysliderthree", storage };

export const persistedCategorysliderthreeReducer = persistReducer(persistConfigCategorysliderthree,categorysliderthreeSlice.reducer);

export default categorysliderthreeSlice.reducer;