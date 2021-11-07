import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerId: "",
    name: "",
    phoneNumber: "",
    image: "",
  },
  reducers: {
    register(state, action) {
      state.customerId = action.payload.customerId;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.image = action.payload.image;
    },
  },
});

export const customerActions = customerSlice.actions;

export default customerSlice.reducer;
