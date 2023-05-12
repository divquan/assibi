import { createSlice } from "@reduxjs/toolkit";
import { shoppingCarts } from "../DummyData";

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    carts: shoppingCarts,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(
        (cart) => cart.itemName !== action.payload.itemName
      );
    },
    clearCart: (state) => {
      state.carts = [];
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
