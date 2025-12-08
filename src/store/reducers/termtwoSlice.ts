import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/termtwo';
import { Term } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Term[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const termtwoSlice = createSlice({
  name: 'termtwo',
  initialState,
  reducers: {},
});

export const persistConfigTermtwo = { key: "termtwo", storage };

export const persistedTermtwoReducer = persistReducer(persistConfigTermtwo,termtwoSlice.reducer);

export default termtwoSlice.reducer;