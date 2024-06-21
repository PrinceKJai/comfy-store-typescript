import { CartState } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: () => {},
    editItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    calculateTotals: () => {},
  },
});

export const { addItem, editItem, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
