import { Item } from "@/types/data.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface InitialState {
  compare: Item[];
}

const initialState: InitialState = {
  compare: [
    {
      id: 63,
      title: "Long lasting perfume",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/50_1.jpg",
      category: "perfume",
      oldPrice: 25.0,
      newPrice: 30.0,
      rating: 4,
      date: "",
      waight: "5 pcs",
      location: "in Store, Online",
      brand: "Bhisma Organice",
      sku: 55555,
      status: "Out Off Stock",
      quantity: 1,
    },
    {
      id: 2,
      title: "Men's stylish printed shirt",
      date: "",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/32_2.jpg",
      category: "men's wear",
      oldPrice: 59.0,
      newPrice: 87.0,
      location: "Online",
      waight: "1 pcs",
      brand: "Bhisma Organice",
      sku: 24433,
      rating: 4,
      status: "Available",
      quantity: 1,
    },
    {
      id: 1831,
      title: "Blue berry",
      date: "",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/23_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/23_1.jpg",
      category: "Fresh Fruits",
      oldPrice: 11.0,
      newPrice: 12.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      waight: "500 g",
      rating: 3,
      status: "Out Of Stock",
      quantity: 1,
    },
  ],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare(state, action: PayloadAction<Item>) {
      state.compare.push(action.payload);
    },
    removeCompareItem(state, action: PayloadAction<number>) {
      state.compare = state.compare.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addCompare, removeCompareItem } = compareSlice.actions;

export const persistConfigCompare = { key: "compare", storage };

export const persistedCompareReducer = persistReducer(persistConfigCompare,compareSlice.reducer);

export default compareSlice.reducer;
