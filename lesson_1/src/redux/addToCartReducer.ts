import { createSlice } from "@reduxjs/toolkit"

interface StateInterface {
  [id: number]: number
}

const initialState: StateInterface = {
  1: 1,
}

export const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => ({
      ...state,
      [action.payload.id]: action.payload.count,
    }),
    removeFromCart: (state, action) => {
      const prevState = state
      delete prevState[action.payload]
      return prevState
    },
  },
})

export const { addToCart, removeFromCart } = addToCartReducer.actions
export default addToCartReducer.reducer
