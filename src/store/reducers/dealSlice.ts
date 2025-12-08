import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/deal';
import { Deal } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Deal[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const dealSlice = createSlice({
  name: 'deal',
  initialState,
  reducers: {},
});

export const persistConfigDeal = { key: "deal", storage };

export const persistedDealReducer = persistReducer(persistConfigDeal,dealSlice.reducer);

export default dealSlice.reducer;