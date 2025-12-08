import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/questionstwo';
import { Questions } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Questions[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const questionstwoSlice = createSlice({
  name: 'questionstwo',
  initialState,
  reducers: {},
});

export const persistConfigQuestionstwo = { key: "questionstwo", storage };

export const persistedQuestionstwoReducer = persistReducer(persistConfigQuestionstwo,questionstwoSlice.reducer);

export default questionstwoSlice.reducer;