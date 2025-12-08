import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/team';
import { Team } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Team[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
});

export const persistConfigTeam = { key: "team", storage };

export const persistedTeamReducer = persistReducer(persistConfigTeam,teamSlice.reducer);

export default teamSlice.reducer;