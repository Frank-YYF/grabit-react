import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/termscondition';
import { Term } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Term[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const termsconditionSlice = createSlice({
  name: 'termscondition',
  initialState,
  reducers: {},
});

export const persistConfigTermscondition = { key: "termscondition", storage };

export const persistedTermsconditionReducer = persistReducer(persistConfigTermscondition,termsconditionSlice.reducer);

export default termsconditionSlice.reducer;