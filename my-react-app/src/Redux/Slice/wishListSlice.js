import { createSlice } from '@reduxjs/toolkit'

const initialState = {


  wishListCart: [],
  
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,

  reducers: {
    addToWishList: (state, action) => {
      const itemToAdd = action.payload;
      
      // Check if item with same ID and size already exists
      const existingItem = state.wishListCart.find(
        item => item.id === itemToAdd.id && item.selectedSize === itemToAdd.selectedSize
      );

      if (existingItem) {
        // Update quantity if item exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity
        state.wishListCart.push({
          ...itemToAdd,
          quantity: itemToAdd.quantity || 1
        });
      }

    },
  
    
   
  },
})

export const { addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;