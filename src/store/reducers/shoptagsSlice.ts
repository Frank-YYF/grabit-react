import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/shoptags';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { GroupTags } from "@/types/data.types";


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

export const shoptagsSlice = createSlice({
  name: 'shoptags',
  initialState,
  reducers: {},
});

export const persistConfigShoptags = { key: "shoptags", storage };

export const persistedShoptagsReducer = persistReducer(persistConfigShoptags,shoptagsSlice.reducer);

export default shoptagsSlice.reducer;