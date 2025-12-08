import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/fashiontags';
import { GroupTags } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupTags[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const fashiontagsSlice = createSlice({
  name: 'fashiontags',
  initialState,
  reducers: {},
});

export const persistConfigFashiontags = { key: "fashiontags", storage };

export const persistedFashiontagsReducer = persistReducer(persistConfigFashiontags,fashiontagsSlice.reducer);

export default fashiontagsSlice.reducer;