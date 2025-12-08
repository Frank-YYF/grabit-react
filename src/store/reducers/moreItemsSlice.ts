import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/moreitem';
import { moreItem } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: moreItem[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const moreItemsSlice = createSlice({
  name: 'moreitems',
  initialState,
  reducers: {},
});

export const persistConfigMoreitems = { key: "moreitems", storage };

export const persistedMoreitemsReducer = persistReducer(persistConfigMoreitems, moreItemsSlice.reducer);

export default moreItemsSlice.reducer;