import axios from "axios";
import endPoints from "@services/api";

export const addProduct = async (body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  };
  const response = await axios.post(
    endPoints.products.addProducts,
    body,
    config
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(endPoints.products.getProduct(id));
  return response.data;
};

export const updateProduct = async (body, id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  };
  const response = await axios.put(
    endPoints.products.updateProduct(id),
    body,
    config
  );
  return response.data;
};
