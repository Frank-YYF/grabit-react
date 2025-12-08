import { Item } from "@/types/data.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface InitialState {
  wishlist: Item[];
}

const initialState: InitialState = {
  wishlist: [
    {
      id: 1,
      title: "Women's wallet Hand Purse",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/48_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/48_1.jpg",
      oldPrice: 50.0,
      newPrice: 70.0,
      date: "",
      rating: 3,
      status: "Available",
      waight: "1 pcs",
      location: "in Store, Online",
      brand: "Bhisma Organice",
      sku: 55555,
      wishlist: "",
      quantity: 1,
    },
    {
      id: 2,
      title: "Rose Gold Earring",
      date: "",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/53_1.jpg",
      rating: 4,
      oldPrice: 60.0,
      newPrice: 80.0,
      status: "Out Of Stock",
      waight: "200g Pack",
      location: "in Store, Online",
      brand: "Bhisma Organice",
      sku: 65055,
      wishlist: "",
      quantity: 1,
    },
    {
      id: 3,
      title: "Apple",
      image:
        process.env.VITE_APP_URL + "/assets/img/product-images/21_1.jpg",
      imageTwo:
        process.env.VITE_APP_URL + "/assets/img/product-images/21_1.jpg",
      oldPrice: 10.0,
      newPrice: 12.0,
      date: "",
      waight: "5 pcs",
      rating: 2,
      status: "Available",
      location: "Online",
      brand: "Bhisma Organice",
      sku: 24355,
      wishlist: "",
      quantity: 1,
    },
  ],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action: PayloadAction<Item>) {
      state.wishlist.push(action.payload);
    },
    removeWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

export const persistConfigWishlist = { key: "wishlist", storage };

export const persistedWishlistReducer = persistReducer(persistConfigWishlist,wishlistSlice.reducer);

export default wishlistSlice.reducer;
