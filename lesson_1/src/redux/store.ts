import { configureStore } from "@reduxjs/toolkit"
import likeReducer from "./likeReducer"
import cartReducer from "./cartReducer"
import addToCartReducer from "./addToCartReducer"

export const store = configureStore({
  reducer: {
    likes: likeReducer,
    cart: cartReducer,
    addToCart: addToCartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
