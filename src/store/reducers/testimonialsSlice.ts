import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/data/testimonials';
import { Testimonials } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: Testimonials[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
});

export const persistConfigTestimonials = { key: "testimonials", storage };

export const persistedTestimonialsReducer = persistReducer(persistConfigTestimonials,testimonialsSlice.reducer);

export default testimonialsSlice.reducer;