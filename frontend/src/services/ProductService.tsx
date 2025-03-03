import { AddProductDTO } from "../components/AddProduct/AddProduct";
import { Product } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://localhost:8080";
export const AllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/products`
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all products:", error);
    return [];
  }
};

export const CreateProduct = async (
  addProductDTO: AddProductDTO
): Promise<Product | null> => {
  try {
    const response = await axios.post<any>(
      `${apiBase}/api/product`,
      addProductDTO
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return null;
  }
};
