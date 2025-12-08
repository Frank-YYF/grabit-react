import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/sidebarweight';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { GroupWeight } from "@/types/data.types";


interface InitialState {
  data: GroupWeight[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const sidebarweightSlice = createSlice({
  name: 'sidebarweight',
  initialState,
  reducers: {},
});

export const persistConfigSidebarweight = { key: "sidebarweight", storage };

export const persistedSidebarweightReducer = persistReducer(persistConfigSidebarweight,sidebarweightSlice.reducer);

export default sidebarweightSlice.reducer;