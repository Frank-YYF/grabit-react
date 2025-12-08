import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/questions';
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

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

export const persistConfigQuestions = { key: "questions", storage };

export const persistedQuestionsReducer = persistReducer(persistConfigQuestions,questionsSlice.reducer);

export default questionsSlice.reducer;