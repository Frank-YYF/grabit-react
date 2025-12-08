import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/service';
import { Service } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
});

export const persistConfigService = { key: "service", storage };

export const persistedServiceReducer = persistReducer(persistConfigService,serviceSlice.reducer);

export default serviceSlice.reducer;