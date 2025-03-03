import { AddSupplierDTO } from "../components/AddSupplier/AddSupplier";
import { Supplier } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://localhost:8080";

export const AllSuppliers = async (): Promise<Supplier[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/suppliers`
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return [];
  }
};

export const CreateSupplier = async (
  addSupplierDTO: AddSupplierDTO
): Promise<Supplier | null> => {
  try {
    const response = await axios.post<any>(
      `${apiBase}/api/supplier`,
      addSupplierDTO
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return null;
  }
};
