import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/vendor-list-2';
import { VendorListTwo } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: VendorListTwo[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const vendorListTwoSlice = createSlice({
  name: 'vendorListTwo',
  initialState,
  reducers: {},
});

export const persistConfigVendorListTwo = { key: "vendorListTwo", storage };

export const persistedVendorListTwoReducer = persistReducer(persistConfigVendorListTwo,vendorListTwoSlice.reducer);

export default vendorListTwoSlice.reducer;