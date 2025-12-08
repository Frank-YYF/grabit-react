import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/footwear';
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

export const FootwearSlice = createSlice({
  name: 'footwear',
  initialState,
  reducers: {},
});

export const persistConfigFootwear = { key: "footwear", storage };

export const persistedFootwearReducer = persistReducer(persistConfigFootwear,FootwearSlice.reducer);

export default FootwearSlice.reducer;