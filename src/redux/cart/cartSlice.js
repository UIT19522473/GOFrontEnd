// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] }, // Thay đổi giá trị khởi tạo thành một mảng rỗng
  reducers: {
    add: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    remove: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    plusQuantity: (state, action) => {
      const ItemCartFind = state.data.find(
        (item) => item.id === action.payload
      );
      ItemCartFind.quantity += 1;
    },
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
// export const selectUser = (state) => state.user.value;

export default cartSlice.reducer;
