import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/facts';
import { Facts } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Facts[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},
});

export const persistConfigFacts = { key: "facts", storage };

export const persistedFactsReducer = persistReducer(persistConfigFacts,factsSlice.reducer);

export default factsSlice.reducer;