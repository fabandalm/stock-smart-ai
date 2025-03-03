import React, { useEffect, useState } from "react";
import FlowTable from "../../components/FlowTable/FlowTable";
import { InboundStock, IOStock, OutboundStock } from "../../helpers/declarations";

import AddInboundStock, {
  AddInboundStockDTO,
} from "../../components/AddInboundStock/AddInboundStock";
import AddOutboundStock, {
  AddOutboundStockDTO,
} from "../../components/AddOutboundStock/AddOutboundStock";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import {
  CreateInboundStock,
  CreateOutboundStock,
  GetAllIOStock,
} from "../../services/IOService";
import { showErrorModal, showSuccessModal } from "../../helpers/handlers";
import NavBar from "../../components/NavBar/NavBar";
import SideNav from "../../components/SideNav/SideNav";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const InboundOutboundPage = (props: Props) => {
  const InboundToStock = (source: InboundStock): IOStock => {
    return {
      product: source.product.name,
      date: source.date,
      id: source.id,
      type: "Inbound",
      facilitator: source.supplier.name,
      quantity: source.quantity,
    };
  };
  const OutboundToStock = (source: OutboundStock): IOStock => {
    return {
      product: source.product.name,
      date: source.date,
      id: source.id,
      type: "Outbound",
      facilitator: source.destination,
      quantity: source.quantity,
    };
  };
  const [ioStock, setIoStock] = useState<IOStock[]>([]);
  const { isLoggedIn } = useAuth();
  const [isInboundModalOpen, setInboundModalOpen] = useState<boolean>(false);
  const [isOutboundModalOpen, setOutboundModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetAllIoOperations = async () => {
      setLoading(true);
      const response = await GetAllIOStock();
      setIoStock(response);
      setLoading(false);
    };

    GetAllIoOperations();
  }, []);
  const CloseInbound = async (data?: AddInboundStockDTO) => {
    try {
      setInboundModalOpen(false);
      console.log("Data:", data); // Log data to verify its content
      if (data) {
        const response = await CreateInboundStock(data);

        console.log("Response:", response); // Log response to ensure it's valid

        if (response != null) {
          setIoStock(
            [...ioStock, InboundToStock(response)].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          );
          showSuccessModal();
        } else {
          throw new Error("Invalid response from CreateEntreeStock"); // Handle unexpected response
        }
      } else {
      }
    } catch (error) {
      console.error("Error:", error); // Log error to debug
      setInboundModalOpen(false);
      showErrorModal();
    }
  };
  const CloseSortie = async (data?: AddOutboundStockDTO) => {
    try {
      setOutboundModalOpen(false);
      console.log("Data:", data); // Log data to verify its content
      if (data) {
        const response = await CreateOutboundStock(data);

        console.log("Response:", response); // Log response to ensure it's valid

        if (response != null) {
          setIoStock(
            [...ioStock, OutboundToStock(response)].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          );
          showSuccessModal();
        } else {
          throw new Error("Invalid response from CreateSortieStock"); // Handle unexpected response
        }
      } else {
      }
    } catch (error) {
      console.error("Error:", error); // Log error to debug
      setOutboundModalOpen(false);
      showErrorModal();
    }
  };
  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
      <div>
        <div className="pt-36 px-2">
          <div className="flex justify-end gap-5 items-center py-4 container mx-auto">
            <button
              onClick={(e) => {
                setInboundModalOpen(true);
              }}
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 font-medium rounded">
              Add Inbound Stock
            </button>
            <button
              onClick={(e) => {
                setOutboundModalOpen(true);
              }}
              className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 font-medium rounded">
              Add Outbound Stock
            </button>
          </div>
          {isLoading ? (
            <TableSkeleton isLoading={isLoading}></TableSkeleton>
          ) : (
            <FlowTable iOStock={ioStock}></FlowTable>
          )}
        </div>
      </div>
      {isInboundModalOpen && (
        <AddInboundStock
          isOpen={isInboundModalOpen}
          onClose={CloseInbound}></AddInboundStock>
      )}
      {isOutboundModalOpen && (
        <AddOutboundStock
          isOpen={isOutboundModalOpen}
          onClose={CloseSortie}></AddOutboundStock>
      )}
    </div>
  );
};

export default InboundOutboundPage;
