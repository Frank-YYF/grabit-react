import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { persistedSnackReducer } from "./reducers/snackSlice";
import { persistedCartReducer } from "./reducers/cartSlice";
import { persistedRegistrationReducer } from "./reducers/registrationSlice";
import { persistedWishlistReducer } from "./reducers/wishlistSlice";
import { persistedCompareReducer } from "./reducers/compareSlice";
import { persistedStepReducer } from "./reducers/stepSlice";
import { persistedFilterReducer } from "./reducers/filterReducer";
import { persistedVendorListTwoReducer } from "./reducers/vendorListTwoSlice";
import { persistedvendorListReducer } from "./reducers/vendorListSlice";
import { persistedTrendingReducer } from "./reducers/trendingSlice";
import { persistedServiceReducer } from "./reducers/serviceSlice";
import { persistedRatedReducer } from "./reducers/ratedSlice";
import { persistedFashiondealReducer } from "./reducers/fashiondealSlice";
import { persistedQuestionstwoReducer } from "./reducers/questionstwoSlice";
import { persistedQuestionsReducer } from "./reducers/questionsSlice";
import { persistedCategorysliderthreeReducer } from "./reducers/categorysliderthreeSlice";
import { persistedCategoryslideroneReducer } from "./reducers/categorySlice";
import { persistedPolicytwoReducer } from "./reducers/policytwoSlice";
import { persistedSellingReducer } from "./reducers/sellingSlice";
import { persistedPolicyReducer } from "./reducers/policySlice";
import { persistedDealReducer } from "./reducers/dealSlice";
import { persistedLatestblogReducer } from "./reducers/latestblogSlice";
import { persistedVegetablesReducer } from "./reducers/vegetablesSlice";
import { persistedFruitsReducer } from "./reducers/fruitsSlice";
import { persistedMoreitemsReducer } from "./reducers/moreItemsSlice";
import { persistedFactsReducer } from "./reducers/factsSlice";
import { persistedTeamReducer } from "./reducers/teamSlice";
import { persistedTestimonialsReducer } from "./reducers/testimonialsSlice";
import { persistedFashiontwobannerReducer } from "./reducers/fashiontwobannerSlice";
import { persistedFashionblogReducer } from "./reducers/fashionblogSlice";
import { persistedTermsconditionReducer } from "./reducers/termsconditionSlice";
import { persistedFashionsellingReducer } from "./reducers/fashionsellingSlice";
import { persistedFashionratedReducer } from "./reducers/fashionratedSlice";
import { persistedFashionitemReducer } from "./reducers/fashionitemSlice";
import { persistedFashiontwoblogReducer } from "./reducers/fashiontwoblogSlice";
import { persistedProductimageReducer } from "./reducers/productimageSlice";
import { persistedProductallReducer } from "./reducers/productallSlice";
import { persistedRcentblogReducer } from "./reducers/recentblogSlice";
import { persistedShopcategoryReducer } from "./reducers/shopcategorySlice";
import { persistedShopitemReducer } from "./reducers/shopitemSlice";
import { persistedShopByColorReducer } from "./reducers/shopByColorSlice";
import { persistedShopcolorReducer } from "./reducers/shopcolorSlice";
import { persistedShoptagsReducer } from "./reducers/shoptagsSlice";
import { persistedBlogcategoryReducer } from "./reducers/blogcategorySlice";
import { persistedFashionaccessoriesReducer } from "./reducers/fashionaccessoriesSlice";
import { persistedFashionclothesReducer } from "./reducers/fashionclothesSlice";
import { persistedShopByCategoryReducer } from "./reducers/shopByCategorySlice";
import { persistedFashionbrandReducer } from "./reducers/fashionbrandSlice";
import { persistedSidebarweightReducer } from "./reducers/sidebarweightSlice";
import { persistedFashionfootwearReducer } from "./reducers/fashionfootwearSlice";
import { persistedFashiontagsReducer } from "./reducers/fashiontagsSlice";
import { persistedFashionallReducer } from "./reducers/fashionallSlice";
import { persistedClothesReducer } from "./reducers/clothesSlice";
import { persistedFootwearReducer } from "./reducers/footwearSlice";
import { persistedAccessoriesReducer } from "./reducers/accessoriesSlice";
import { persistedFashiontwoallReducer } from "./reducers/fashiontwoallSlice";
import { persistedFashiontwoclothesReducer } from "./reducers/fashiontwoclothesSlice";
import { persistedFashiontwofootwearReducer } from "./reducers/fashiontwofootwearSlice";
import { persistedFashiontwoaccessoriesReducer } from "./reducers/fashiontwoaccessoriesSlice";
import { persistedTermtwoReducer } from "./reducers/termtwoSlice";
import { persistedCategorydealReducer } from "./reducers/categorydealSlice";
import { persistedCategoryslidertwoReducer } from "./reducers/categorysliderSlice";

// Combine reducers
const rootReducer = combineReducers({
  cart: persistedCartReducer,
  registration: persistedRegistrationReducer,
  wishlist: persistedWishlistReducer,
  compare: persistedCompareReducer,
  step: persistedStepReducer,
  filter: persistedFilterReducer,
  moreitems: persistedMoreitemsReducer,
  facts: persistedFactsReducer,
  team: persistedTeamReducer,
  testimonials :persistedTestimonialsReducer,
  fashiontwobanner: persistedFashiontwobannerReducer,
  fashionblog: persistedFashionblogReducer,
  termscondition: persistedTermsconditionReducer,
  fashionselling: persistedFashionsellingReducer,
  fashionrated: persistedFashionratedReducer,
  fashionitem: persistedFashionitemReducer,
  fashiontwoblog: persistedFashiontwoblogReducer,
  productimage: persistedProductimageReducer,
  productall: persistedProductallReducer,
  snack: persistedSnackReducer,
  fruits: persistedFruitsReducer,
  vegetables: persistedVegetablesReducer,
  latestblog: persistedLatestblogReducer,
  deal: persistedDealReducer,
  policy: persistedPolicyReducer,
  selling: persistedSellingReducer,
  policytwo: persistedPolicytwoReducer,
  categorysliderone: persistedCategoryslideroneReducer,
  categorysliderthree: persistedCategorysliderthreeReducer,
  questions: persistedQuestionsReducer,
  questionstwo: persistedQuestionstwoReducer,
  fashiondeal: persistedFashiondealReducer,
  rated: persistedRatedReducer,
  service: persistedServiceReducer,
  trending: persistedTrendingReducer,
  vendorList: persistedvendorListReducer,
  vendorListTwo: persistedVendorListTwoReducer,
  recentblog:persistedRcentblogReducer,
  shopcategory:persistedShopcategoryReducer,
  shopbycategory:persistedShopByCategoryReducer,
  shopitem:persistedShopitemReducer,
  shopcolor:persistedShopcolorReducer,
  shopByColor:persistedShopByColorReducer,
  shoptags:persistedShoptagsReducer,
  blogcategory: persistedBlogcategoryReducer,
  fashionaccessories: persistedFashionaccessoriesReducer,
  fashionclothes: persistedFashionclothesReducer,
  fashionbrand: persistedFashionbrandReducer,
  sidebarweight: persistedSidebarweightReducer,
  fashionfootwear: persistedFashionfootwearReducer,
  fashiontags: persistedFashiontagsReducer,
  fashionall :persistedFashionallReducer,
  clothes :persistedClothesReducer,
  footwear :persistedFootwearReducer,
  accessories: persistedAccessoriesReducer,
  fashiontwoall: persistedFashiontwoallReducer,
  fashiontwoclothes: persistedFashiontwoclothesReducer,
  fashiontwofootwear: persistedFashiontwofootwearReducer,
  fashiontwoaccessories: persistedFashiontwoaccessoriesReducer,
  termtwo: persistedTermtwoReducer,
  categorydeal: persistedCategorydealReducer,
  categoryslidertwo: persistedCategoryslidertwoReducer,
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
      immutableCheck: false, // Disable immutable check to improve performance
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persistor
export const persistor = persistStore(store);
