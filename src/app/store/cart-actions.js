import { cartActions } from "./cart-slice";
import axios from "axios";

//create cart
export const createCart = (cart) => {
  return async (dispatch) => {
    const create = async (cart) => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/Cart/create",
        data: {
          customerId: cart.customerId,
          shopId: cart.shopId,
        },
      });

      if (response.status !== 200) {
        throw new Error("Could not create cart!");
      }

      const data = await response.data;

      return data;
    };

    const data = await create(cart);

    dispatch(
      cartActions.create({
        cartId: data.cartId,
        customerId: cart.customerId,
        shopId: cart.shopId,
      })
    );
  };
};

//create cart
export const addItemToCart = (itemId, cartId, customerId) => {
  return async (dispatch) => {
    const add = async (itemId, cartId, customerId) => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080//api/Cart/add/item",
        data: {
          "itemId": itemId,
          "customerId": customerId,
          "cartId": cartId
        },
      });

      if (response.status !== 200) {
        throw new Error("Could not create cart!");
      }

      const data = await response.data;

      return data;
    };

    const data = await cartId(itemId, cartId, customerId);

    dispatch(
      cartActions.addItem({
        cartId: data.cartId,
        customerId: data.customerId,
        shopId: data.shopId,
      })
    );
  };
};
