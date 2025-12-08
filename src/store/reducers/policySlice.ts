import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/policy';
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

export const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {},
});

export const persistConfigPolicy = { key: "policy", storage };

export const persistedPolicyReducer = persistReducer(persistConfigPolicy,policySlice.reducer);

export default policySlice.reducer;