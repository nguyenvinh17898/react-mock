import { shopActions } from "./shop-slice";
import axios from "axios";

//fetch data for shop
export const fetchShopData = (shopId) => {
  console.log("shop id" + shopId);
  return async (dispatch) => {
    const fetchData = async (shopId) => {
      const response = await axios("http://localhost:8080/api/Shop/" + shopId);

      if (response.status !== 200) {
        throw new Error("Could not fetch shop data!");
      }

      const data = await response.data;

      return data;
    };

    const shopData = await fetchData(shopId);

    dispatch(
      shopActions.getDataShop({
        shopId: shopId,
        name: shopData.name,
        phoneNumber: shopData.phoneNumber,
        image: shopData.image,
        items: shopData.items,
      })
    );
  };
};

//fetch data for shop
export const fetchShopAll = () => {
  return async (dispatch) => {
    const fetchAll = async (shopId) => {
      const response = await axios("http://localhost:8080/api/Shop/all");

      if (response.status !== 200) {
        throw new Error("Could not fetch shop data!");
      }

      const data = await response.data;

      return data;
    };

    const shopData = await fetchAll();

    dispatch(
      shopActions.getShopAll({
        shops: shopData,
      })
    );
  };
};

//add item for shop
export const addItem = (item) => {
  return async (dispatch) => {
    const add = async (item) => {
      let formData = new FormData();
      formData.append("shopId", item.shopId);
      formData.append("name", item.name);
      formData.append("price", item.price);
      formData.append("image", item.image);

      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/Item/create",
        data: formData,
      });

      if (response.status !== 200) {
        throw new Error("Could not fetch shop data!");
      }

      const data = await response.data;

      return data;
    };

    const data = await add(item);

    dispatch(
      shopActions.addItem({
        shopId: item.shopId,
        itemId: data.itemId,
        name: item.name,
        price: item.price,
        image: data.image
      })
    );
  };
};

//delete item from shop
export const deleteItem = (shopId, itemId) => {
  return async (dispatch) => {
    const remove = async (shopId, itemId) => {
      const response = await axios({
        url: "http://localhost:8080/api/Item",
        method: "DELETE",
        data: {
          shopId: shopId,
          itemId: itemId,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Could not fetch shop data!");
      }

      const data = await response.data;

      return data;
    };

    const data = await remove(shopId, itemId);

    dispatch(
      shopActions.removeItem({
        shopId: shopId,
        itemId: itemId,
      })
    );
  };
};

//add item for shop
export const updateItem = (item) => {
  return async (dispatch) => {
    const update = async (item) => {
      let formData = new FormData();
      formData.append("shopId", item.shopId);
      formData.append("itemId", item.itemId);
      formData.append("name", item.name);
      formData.append("price", item.price);
      formData.append("image", item.image);

      const response = await axios({
        method: "PUT",
        url: "http://localhost:8080/api/Item",
        data: formData,
      });

      if (response.status !== 200) {
        throw new Error("Could not update item!");
      }

      const data = await response.data;

      return data;
    };

    const data = await update(item);

    dispatch(
      shopActions.updateItem({
        shopId: item.shopId,
        itemId: item.itemId,
        name: data.name,
        price: data.price,
        image: data.image,
      })
    );
  };
};

//fetch data for shop
export const findItemById = (itemId) => {
  return async (dispatch) => {
    const findById = async (itemId) => {
      const response = await axios("http://localhost:8080/api/Item/" + itemId);

      if (response.status !== 200) {
        throw new Error("Could not fetch item data!");
      }

      const data = await response.data;

      return data;
    };

    const data = await findById(itemId);

    dispatch(
      shopActions.findItemById({
        item: data,
      })
    );
  };
};
