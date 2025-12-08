import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/shopcategory';
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

export const shopcategorySlice = createSlice({
  name: 'shopcategory',
  initialState,
  reducers: {},
});

export const persistConfigShopcategory = { key: "shopcategory", storage };

export const persistedShopcategoryReducer = persistReducer(persistConfigShopcategory,shopcategorySlice.reducer);

export default shopcategorySlice.reducer;