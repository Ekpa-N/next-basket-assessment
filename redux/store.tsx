'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishReducer from "./wishSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishReducer
})

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: {
    products: productReducer,
    wishCart: persistedReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);