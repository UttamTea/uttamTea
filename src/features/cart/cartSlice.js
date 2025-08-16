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
        (item) => item.variantId === newItem.variantId
      );

      if (existingItem) {
        const updatedQuantity =
          existingItem.purchasedQuantity + newItem.purchasedQuantity;

        if (updatedQuantity <= existingItem.totalAvailableQuantity) {
          existingItem.purchasedQuantity = updatedQuantity;
          state.totalPrice += newItem.price * newItem.purchasedQuantity;
        }
      } else {
        state.cartItems.push(newItem);
        state.totalPrice += newItem.price * newItem.purchasedQuantity;
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.variantId === itemId);

      if (item) {
        state.totalPrice -= item.price * item.purchasedQuantity;
        state.cartItems = state.cartItems.filter((i) => i.variantId !== itemId);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },

    // 🔹 NEW: Increase item quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.variantId === action.payload);

      if (item && item.purchasedQuantity < item.totalAvailableQuantity) {
        item.purchasedQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    // 🔹 NEW: Decrease item quantity
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.variantId === action.payload);

      if (item && item.purchasedQuantity > 1) {
        item.purchasedQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
