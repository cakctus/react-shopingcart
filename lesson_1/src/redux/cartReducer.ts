import { createSlice } from "@reduxjs/toolkit"
import productsArray, { getProductsObject } from "components/Products/products"

interface InitialState {
  productsObject: any
}
const initialState: InitialState = {
  productsObject: getProductsObject(productsArray),
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: any, action) => {
      const item = state.productsObject[action.payload]
      item.count++
    },
    decrement: (state: any, action) => {
      const item = state.productsObject[action.payload]
      item.count--
    },
  },
})

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer
