import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/fashionfootwear';
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

export const fashionfootwearSlice = createSlice({
  name: 'fashionfootwear',
  initialState,
  reducers: {},
});

export const persistConfigFashionfootwear = { key: "fashionfootwear", storage };

export const persistedFashionfootwearReducer = persistReducer(persistConfigFashionfootwear,fashionfootwearSlice.reducer);

export default fashionfootwearSlice.reducer;