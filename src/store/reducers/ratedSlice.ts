import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/rated';
import { Rated } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Rated[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const ratedSlice = createSlice({
  name: 'rated',
  initialState,
  reducers: {},
});

export const persistConfigRated = { key: "rated", storage };

export const persistedRatedReducer = persistReducer(persistConfigRated,ratedSlice.reducer);

export default ratedSlice.reducer;