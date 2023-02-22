import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import summary from "../reducer/summary";
import product from "../reducer/product";
import recentBlogs from "../reducer/recentBlogs";
import cityName from "../reducer/cityName";
import blog from "../reducer/blog";
import blogContent from "../reducer/blogContent";
import developer from "../reducer/developer";
import cityData from "../reducer/cityData";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import developerList from "../reducer/developerListing";
import nearByProperty from "../reducer/nearByProperty";
import trendingProperties from "../reducer/trendingProperties";
import propertyType from "../reducer/propertyType";
import recommendedProperties from "../reducer/recommendedProperties";
import popularBuilders from "../reducer/popularBuilders";
import propertyServices from "../reducer/propertyServices";
import topPartners from "../reducer/topPartners";
import allProjectList from "../reducer/allProjectList";

const reducer = combineReducers({
  summary: summary,
  recentBlogs: recentBlogs,
  product: product,
  cityName: cityName,
  cityData: cityData,
  blog: blog,
  blogContent: blogContent,
  developer: developer,
  developerList: developerList,
  nearByProperty: nearByProperty,
  trendingProperties: trendingProperties,
  propertyType: propertyType,
  recommendedProperties: recommendedProperties,
  popularBuilders: popularBuilders,
  propertyServices: propertyServices,
  topPartners: topPartners,
  allProjectList: allProjectList,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "summary",
    // "img",
    // "product",
    // "cityName",
    // "cityData",
    // "blog",
    // "blogContent",
    // "developer",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
