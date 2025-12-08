import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/fashionaccessories';
import { GroupCategory } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashionaccessoriesSlice = createSlice({
  name: 'fashionaccessories',
  initialState,
  reducers: {},
});

export const persistConfigFashionaccessories = { key: "fashionaccessories", storage };

export const persistedFashionaccessoriesReducer = persistReducer(persistConfigFashionaccessories,fashionaccessoriesSlice.reducer);

export default fashionaccessoriesSlice.reducer;