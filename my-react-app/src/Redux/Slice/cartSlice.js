import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      
      // Check if item with same ID and size already exists
      const existingItem = state.cart.find(
        item => item.id === itemToAdd.id && item.selectedSize === itemToAdd.selectedSize
      );

      if (existingItem) {
        // Update quantity if item exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity
        state.cart.push({
          ...itemToAdd,
          quantity: itemToAdd.quantity || 1
        });
      }

      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      state.cart = state.cart.filter(
        item => !(item.id === id && item.selectedSize === selectedSize)
      );
      
      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    updateQuantity: (state, action) => {
      const { id, selectedSize, quantity } = action.payload;
      const item = state.cart.find(
        item => item.id === id && item.selectedSize === selectedSize
      );
      
      if (item && quantity > 0) {
        item.quantity = quantity;
        
        // Update totals
        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;