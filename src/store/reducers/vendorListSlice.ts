import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/vendor-list';
import { VendorList } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: VendorList[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const vendorListSlice = createSlice({
  name: 'vendorlist',
  initialState,
  reducers: {},
});

export const persistConfigvendorList = { key: "vendorlist", storage };

export const persistedvendorListReducer = persistReducer(persistConfigvendorList,vendorListSlice.reducer);

export default vendorListSlice.reducer;