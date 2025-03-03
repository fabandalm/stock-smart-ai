import React, { useEffect, useState } from "react";
import ProductTable from "../../components/ProductTable/ProductTable";
import { Product } from "../../helpers/declarations";
import AddProduct, {AddProductDTO,} from "../../components/AddProduct/AddProduct";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import { AllProducts, CreateProduct } from "../../services/ProductService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";
import { useAuth } from "../../contexts/UseAuth";
import SideNav from "../../components/SideNav/SideNav";
import NavBar from "../../components/NavBar/NavBar";

type Props = {};

const StockPage = (props: Props) => {
  const [isModelOpen, setModelOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      const results = await AllProducts();
      setProducts(results);
      setLoading(false);
    };
    getAllProducts();
  }, []);
  const CloseModel = async (addProductDTO?: AddProductDTO) => {
    setModelOpen(false);
    if (addProductDTO) {
      console.log(addProductDTO);
      try {
        const response = await CreateProduct(addProductDTO);
        if (response) {
          setProducts([...products, response]);
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
      <div className="pt-36 px-2">
        <div className="flex justify-end py-4 container mx-auto">
          <button
            onClick={(e) => {
              setModelOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded">
            Add Product
          </button>
        </div>
        {isLoading ? (
          <TableSkeleton isLoading={isLoading}></TableSkeleton>
        ) : (
          <ProductTable products={products}></ProductTable>
        )}
      </div>
      <AddProduct
        isOpen={isModelOpen}
        onClose={CloseModel}></AddProduct>
      {/* {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />} */}
    </div>
  );
};

export default StockPage;
