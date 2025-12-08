import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/categoryslidertwo';
import { Category } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const categoryslidertwoSlice = createSlice({
  name: 'categoryslidertwo',
  initialState,
  reducers: {},
});

export const persistConfigCategoryslidertwo = { key: "categoryslidertwo", storage };

export const persistedCategoryslidertwoReducer = persistReducer(persistConfigCategoryslidertwo,categoryslidertwoSlice.reducer);

export default categoryslidertwoSlice.reducer;