import { API_URLS } from "./routes";
import { axiosInstance } from "./axiosInstance";

// Base URL (change it if you have a specific backend URL)
const BASE_URL = "http://localhost:1337/api"; // Replace with actual base URL

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}${API_URLS.GET_PRODUCTS}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}${API_URLS.GET_PRODUCTS}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
