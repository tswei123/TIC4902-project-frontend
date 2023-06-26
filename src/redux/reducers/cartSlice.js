import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
    totalItems: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItem = [...state.cartItem,action.payload];
      state.totalItems = state.totalItems + 1;
    },
    removeCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter(item =>(item.ordernumber !== action.payload.ordernumber));
      state.totalItems = state.totalItems - 1;
    },
    setCartItem: (state, action) => {
      state.cartItem = action.payload.allCartItem;
      state.totalItems = action.payload.totalItemCount;
    }
  },
})

export const { addCartItem, removeCartItem, setCartItem } = cartSlice.actions

export const cartitem = (state) => state.cart.cartItem
export const totalitems = (state) => state.cart.totalItems

export default cartSlice.reducer