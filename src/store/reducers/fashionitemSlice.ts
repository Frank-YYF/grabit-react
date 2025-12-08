import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashionitem';
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

export const fashionitemSlice = createSlice({
  name: 'fashionitem',
  initialState,
  reducers: {},
});

export const persistConfigFashionitem = { key: "fashionitem", storage };

export const persistedFashionitemReducer = persistReducer(persistConfigFashionitem,fashionitemSlice.reducer);

export default fashionitemSlice.reducer;