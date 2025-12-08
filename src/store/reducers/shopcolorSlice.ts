import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/shopcolor';
import { GroupColor } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupColor[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const shopcolorSlice = createSlice({
  name: 'shopcolor',
  initialState,
  reducers: {},
});

export const persistConfigShopcolor = { key: "shopcolor", storage };

export const persistedShopcolorReducer = persistReducer(persistConfigShopcolor,shopcolorSlice.reducer);

export default shopcolorSlice.reducer;