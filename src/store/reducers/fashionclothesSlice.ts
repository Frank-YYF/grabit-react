import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/fashionclothes';
import { GroupCategory } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashionclothesSlice = createSlice({
  name: 'fashionclothes',
  initialState,
  reducers: {},
});

export const persistConfigFashionclothes = { key: "fashionclothes", storage };

export const persistedFashionclothesReducer = persistReducer(persistConfigFashionclothes,fashionclothesSlice.reducer);

export default fashionclothesSlice.reducer;