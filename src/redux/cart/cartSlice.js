import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    // add product into cart
    add: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    // remove product from cart
    remove: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    // plus quantity of product in the cart by id
    plusQuantity: (state, action) => {
      const ItemCartFind = state.data.find(
        (item) => item.id === action.payload
      );
      ItemCartFind.quantity += 1;
    },

    // minus quantity of product in the cart by id. If quantity = 0 -> remove this product from the cart
    minusQuantity: (state, action) => {
      const ItemCartFind = state.data.find(
        (item) => item.id === action.payload
      );
      if (ItemCartFind.quantity > 1) {
        ItemCartFind.quantity -= 1;
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { add, remove, plusQuantity, minusQuantity } = cartSlice.actions;

export default cartSlice.reducer;
