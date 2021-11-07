import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "./shop-slice";
import customerReducer from "./customer-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { shop: shopReducer, customer: customerReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
