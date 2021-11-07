import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopId: "",
    name: " ",
    phoneNumber: "",
    image: "",
    items: [],
    item: {},
    shops: []
  },
  reducers: {
    //get data for shop
    getDataShop(state, action) {
      state.shopId = action.payload.shopId;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.image = action.payload.image;
      state.items = action.payload.items;
    },
    //remove item from shop
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) =>
          item.shopId === action.payload.shopId &&
          item.itemId !== action.payload.itemId
      );
    },
    //update item for shop
    updateItem(state, action) {
      const updateItem = state.items.find(
        (item) =>
          item.shopId === action.payload.shopId &&
          item.itemId === action.payload.itemId
      );
      if (updateItem) {
        updateItem.name = action.payload.name;
        updateItem.price = action.payload.price;
        updateItem.image = action.payload.image;
      }
    },
    //update item for shop
    addItem(state, action) {
      state.items.push({
        shopId: action.payload.shopId,
        itemId: action.payload.itemId,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        isActive: true
      })
    },
    //find item by id
    findItemById(state, action){
      state.item  = action.payload.item;
    },
    //get shop all
    getShopAll(state, action){
      state.shops = action.payload.shops;
    }
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
