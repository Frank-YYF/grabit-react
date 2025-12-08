import { createSlice } from "@reduxjs/toolkit";
import initialData from '@/utility/groupdata/blogcategory';
import { GroupCategory } from '@/types/data.types';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface InitialState {
  data: GroupCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: initialData,
  loading: false,
  error: null,
};

export const blogcategorySlice = createSlice({
  name: 'blogcategory',
  initialState,
  reducers: {},
});

export const persistConfigBlogcategory = { key: "blogcategory", storage };

export const persistedBlogcategoryReducer = persistReducer(persistConfigBlogcategory,blogcategorySlice.reducer);

export default blogcategorySlice.reducer;