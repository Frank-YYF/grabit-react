import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/recentblog';
import { RecentBlog } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: RecentBlog[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const recentblogSlice = createSlice({
  name: 'recentblog',
  initialState,
  reducers: {},
});

export const persistConfigRcentblog = { key: "recentblog", storage };

export const persistedRcentblogReducer = persistReducer(persistConfigRcentblog,recentblogSlice.reducer);

export default recentblogSlice.reducer;