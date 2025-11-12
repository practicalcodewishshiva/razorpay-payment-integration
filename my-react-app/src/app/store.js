import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../Redux/Slice/cartSlice'
import  wishListSlice  from '../Redux/Slice/wishListSlice'

export const store = configureStore({
  reducer: {
    allCart : cartSlice,
    wishListContainer : wishListSlice
  },
})