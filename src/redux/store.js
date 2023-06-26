import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profileSlice'
import authReducer from './reducers/authSlice'
import cartReducer from './reducers/cartSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    cart: cartReducer,
  },
})