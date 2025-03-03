import React, { useEffect, useState } from "react";
import { Category, Supplier } from "../../helpers/declarations";
import { AllCategories } from "../../services/CategoryService";
import { AllSuppliers } from "../../services/SupplierService";

interface ModelProps {
  isOpen: boolean;
  onClose: (data?: AddProductDTO) => void; // A function type that takes no arguments and returns void
}
export interface AddProductDTO {
  name: string;
  description?: string;
  categoryId: number;
  supplierId: number;
  price: number;
  quantity: number;
  barCode: string;
}
const AddProduct = (props: ModelProps) => {

  const [FormsValues, setFormsValues] = useState<AddProductDTO>({
    name: "",
    description: "",
    categoryId: 0,
    supplierId: 0,
    price: 0,
    quantity: 0,
    barCode: "",
  });
  const [Categories, setCategories] = useState<Category[]>([]);
  const [Suppliers, setSuppliers] = useState<Supplier[]>([]);
  useEffect(() => {
    const getEntries = async () => {
      const categoriesResponse = await AllCategories();
      setCategories(categoriesResponse);
      const suppliersResponse = await AllSuppliers();
      setSuppliers(suppliersResponse);
    };
    getEntries();
  }, []);
  if (!props.isOpen) return null;
  return (
    <div
      onClick={(e) => props.onClose()}
      className="fixed left-0 top-0 z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative  p-4  max-w-fit max-h-full">
        <div className="relative  bg-white  rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900  dark:text-white">
              Create New Product
            </h3>
            <button
              onClick={() => props.onClose()}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close model</span>
            </button>
          </div>
          <form
            onSubmit={(e) => props.onClose(FormsValues)}
            className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-12">
              <div className="col-span-12">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Product Name"
                  required
                  value={FormsValues?.name || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="999"
                  required
                  value={FormsValues?.quantity || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      quantity: Number(e.target.value),
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required
                  value={FormsValues?.price || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      price: Number(e.target.value),
                    }));
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="supplier"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Supplier
                </label>
                <select
                  value={FormsValues?.supplierId || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      supplierId: Number(e.target.value), // Convert the value to a number
                    }));
                  }}
                  id="supplier"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>Select Supplier</option>
                  {Suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select
                  id="category"
                  value={FormsValues?.categoryId || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      categoryId: Number(e.target.value), // Convert the value to a number
                    }));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option value="">Select category</option>
                  {Categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Description
                </label>
                <textarea
                  id="description"
                  value={FormsValues.description}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Product Description"></textarea>
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="barCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  barCode
                </label>
                <input
                  type="text"
                  name="barCode"
                  id="barCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Bar Code"
                  required
                  value={FormsValues?.barCode || ""}
                  onChange={(e) => {
                    setFormsValues((prev) => ({
                      ...prev,
                      barCode: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add New Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
