import { customerActions } from "./customer-slice";
import axios from "axios";

//sqimport { createCart } from "../store/cart-actions";

//regist for customer
export const registerCustomer = (customer) => {
  return async (dispatch) => {
    const register = async (customer) => {
      let formData = new FormData();
      formData.append("name", customer.name);
      formData.append("phoneNumber", customer.phoneNumber);

      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/Customer/register",
        data: formData,
      });

      if (response.status !== 200) {
        throw new Error("Could not update item!");
      }

      const data = await response.data;

      return data;
    };

    const data = await register(customer);
    localStorage.setItem('customerId', data.customerId)
    dispatch(
      customerActions.register({
        customerId: data.customerId,
        name: customer.name,
        phoneNumber: customer.phoneNumber,
      })
    );

    //  dispatch(
    //   createCart({
    //     shopId: customer.shopId,
    //     customerId: data.customerId,
    //   })
    // );
  };
};
