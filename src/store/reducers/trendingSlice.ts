import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/trending';
import { Trending } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Trending[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
});

export const persistConfigTrending = { key: "trending", storage };

export const persistedTrendingReducer = persistReducer(persistConfigTrending,trendingSlice.reducer);

export default trendingSlice.reducer;