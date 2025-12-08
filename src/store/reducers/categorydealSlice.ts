import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/categorydeal';
import { Deal } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Deal[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const categorydealSlice = createSlice({
  name: 'categorydeal',
  initialState,
  reducers: {},
});

export const persistConfigCategorydeal = { key: "categorydeal", storage };

export const persistedCategorydealReducer = persistReducer(persistConfigCategorydeal,categorydealSlice.reducer);

export default categorydealSlice.reducer;