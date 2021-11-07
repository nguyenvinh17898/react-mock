import { createSlice } from "@reduxjs/toolkit";

const cartlice = createSlice({
  name: "cart",
  initialState: {
    cartId: "",
    shopId: "",
    customerId: "",
    items: [],
  },
  reducers: {
    create(state, action) {
      state.cartId = action.payload.cartId;
      state.shopId = action.payload.shopId;
      state.customerId = action.payload.customerId;
    },

    addItem(state, action) {
      const existingItem = state.items.filter(
        (item) =>
          item.customerId === action.payload.customerId &&
          item.cartId === action.payload.cartId &&
          item.itemId === action.payload.itemId
      );

      if(existingItem){
        existingItem.amount++;
      }else{
        state.items.push({
          customerId : action.payload.customerId,
          cartId : action.payload.cartId,
          itemId :action.payload.itemId,
          amount: 1,
          price: action.payload.price,
        })
      }
    },
  },
});

export const cartActions = cartlice.actions;

export default cartlice.reducer;
