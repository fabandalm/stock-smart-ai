import React, { useEffect, useState } from "react";
import CategoryTable from "../../components/CategoryTable/CategorieTable";
import { Category } from "../../helpers/declarations";

import AddCategory, {
  AddCategoryDTO,
} from "../../components/AddCategory/AddCategory";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import { AllCategories, CreateCategory } from "../../services/CategoryService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";
import NavBar from "../../components/NavBar/NavBar";
import SideNav from "../../components/SideNav/SideNav";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const CategoryPage = (props: Props) => {
  const [isModelOpen, setModelOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    const GetAllCategories = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const results = await AllCategories();
        setCategories(results);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    GetAllCategories();
  }, []);
  const CloseModal = async (addCategorieDto?: AddCategoryDTO) => {
    setModelOpen(false);
    if (addCategorieDto) {
      console.log(addCategorieDto);
      try {
        const response = await CreateCategory(addCategorieDto);
        if (response) {
          setCategories([...categories, response]);
          showSuccessModal();
        } else {
          showErrorModal();
        }
      } catch (error) {
        showErrorModal();
      }
    } else {
    }
  };
  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
      <div>
        <div className="pt-36 px-2">
          <div className="flex justify-end py-4 container mx-auto">
            <button
              onClick={(e) => setModelOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded">
              Add Category
            </button>
          </div>
          {isLoading ? (
            <TableSkeleton isLoading={isLoading}></TableSkeleton>
          ) : (
            <CategoryTable categories={categories}></CategoryTable>
          )}
        </div>
      </div>
      {isModelOpen && (
        <AddCategory
          isOpen={isModelOpen}
          onClose={CloseModal}
        ></AddCategory>
      )}
      {/* {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />} */}
    </div>
  );
};

export default CategoryPage;
