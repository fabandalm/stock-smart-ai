import { AddCategoryDTO } from "../components/AddCategory/AddCategory";
import { Category } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://backend:8080";

export const AllCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/categories`
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return [];
  }
};

export const CreateCategory = async (
  addCategoryDto: AddCategoryDTO
): Promise<Category | null> => {
  try {
    const response = await axios.post<any>(
      `${apiBase}/api/category`,
      addCategoryDto
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return null;
  }
};
