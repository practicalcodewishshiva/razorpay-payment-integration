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
    
     removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    
    

    
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => { 
      state.cart = state.cart.map((item) => {        
        if (item.id === action.payload) {
          if(item.quantity===1){
            return {...item , quantity:1}
          }
          else{
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });},


  },
})

export const { addToCart, removeFromCart, clearCart ,decreaseItemQuantity , increaseItemQuantity , getCartTotal , removeItem} = cartSlice.actions;
export default cartSlice.reducer;