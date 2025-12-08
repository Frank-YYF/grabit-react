import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/policytwo';
import { Policy } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Policy[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const policytwoSlice = createSlice({
  name: 'policytwo',
  initialState,
  reducers: {},
});

export const persistConfigPolicytwo = { key: "policytwo", storage };

export const persistedPolicytwoReducer = persistReducer(persistConfigPolicytwo,policytwoSlice.reducer);

export default policytwoSlice.reducer;