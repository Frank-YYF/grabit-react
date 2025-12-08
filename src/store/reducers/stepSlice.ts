import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface CounterState {
  steps: boolean[];
}

const initialState: CounterState = {
  steps: [true, true, true, false, false],
};

export const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    markStepAsDone: (state, action: PayloadAction<number>) => {
      state.steps[action.payload] = true;
    },
  },
});

export const { markStepAsDone } = stepSlice.actions;

export const persistConfigStep = { key: "steps", storage };

export const persistedStepReducer = persistReducer(persistConfigStep,stepSlice.reducer);

export default stepSlice.reducer;
