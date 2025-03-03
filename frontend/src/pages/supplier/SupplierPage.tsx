import React, { useEffect, useState } from "react";
import SupplierTable from "../../components/SupplierTable/SupplierTable";
import { Supplier } from "../../helpers/declarations";
import SuccessDialog from "../../components/SuccessDialog/SuccessDialog";
import ErrorDialog from "../../components/ErrorDialog/ErrorDialog";
import AddSupplier, {
  AddSupplierDTO,
} from "../../components/AddSupplier/AddSupplier";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import {
  CreateSupplier,
  AllSuppliers,
} from "../../services/SupplierService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";
import NavBar from "../../components/NavBar/NavBar";
import SideNav from "../../components/SideNav/SideNav";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const SupplierPage = (props: Props) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { isLoggedIn } = useAuth();
  const CloseModal = async (addSupplierDTO?: AddSupplierDTO) => {
    setModalOpen(false);
    if (addSupplierDTO) {
      console.log(addSupplierDTO);
      try {
        const response = await CreateSupplier(addSupplierDTO);
        if (response) {
          setSuppliers([...suppliers, response]);
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
  useEffect(() => {
    const GetAllSuppliers = async () => {
      setLoading(true);
      const results = await AllSuppliers();
      setSuppliers(results);
      setLoading(false);
    };
    GetAllSuppliers();
  }, []);

  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
      <div className="pt-36 px-2">
        <div className="flex justify-end py-4 container mx-auto">
          <button
            onClick={(e) => {
              setModalOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 font-medium rounded"
          >
            Add Supplier
          </button>
        </div>
        {isLoading ? (
          <TableSkeleton isLoading={isLoading}></TableSkeleton>
        ) : (
          <SupplierTable suppliers={suppliers}></SupplierTable>
        )}
      </div>
      {isModalOpen && (
        <AddSupplier
          isOpen={isModalOpen}
          onClose={CloseModal}
        ></AddSupplier>
      )}
      {/* {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorDialog onClose={() => setShowError(false)} />} */}
    </div>
  );
};

export default SupplierPage;
