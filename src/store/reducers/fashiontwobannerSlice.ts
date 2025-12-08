import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/fashiontwobanner';
import { Service } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashiontwobannerSlice = createSlice({
  name: 'fashiontwobanner',
  initialState,
  reducers: {},
});

export const persistConfigFashiontwobanner = { key: "fashiontwobanner", storage };

export const persistedFashiontwobannerReducer = persistReducer(persistConfigFashiontwobanner,fashiontwobannerSlice.reducer);


export default fashiontwobannerSlice.reducer;