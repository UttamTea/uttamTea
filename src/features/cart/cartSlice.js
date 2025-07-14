import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        const updatedQuantity =
          existingItem.purchasedQuantity + newItem.purchasedQuantity;

        if (updatedQuantity <= existingItem.totalAvailableQuantity) {
          // Update quantity
          existingItem.purchasedQuantity = updatedQuantity;
          // Update totalPrice
          state.totalPrice += newItem.price * newItem.purchasedQuantity;
        } else {
          console.warn("Quantity exceeds available stock");
        }
      } else {
        state.cartItems.push(newItem);
        state.totalPrice += newItem.price * newItem.purchasedQuantity;
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);

      if (item) {
        state.totalPrice -= item.price * item.purchasedQuantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
