import axios from "axios";
import { AddInboundStockDTO } from "../components/AddInboundStock/AddInboundStock";
import { AddOutboundStockDTO } from "../components/AddOutboundStock/AddOutboundStock";
import { IOStock, InboundStock, OutboundStock } from "../helpers/declarations";
import { IOMapper } from "../helpers/formatters";
const apiBase = "http://localhost:8080";

export const GetAllIOStock = async (): Promise<IOStock[]> => {
  try {
    const inbounds = await axios.get<any>(
      `${apiBase}/api/inbound/stocks`
    );
    const outbounds = await axios.get<any>(
      `${apiBase}/api/outbound/stocks`
    );
    const results: IOStock[] = IOMapper(inbounds.data, outbounds.data);
    return results;
  } catch (error) {
    console.error("Error in list all suppliers:", error);
    return [];
  }
};

export const CreateInboundStock = async (
  addInboundStockDTO: AddInboundStockDTO
): Promise<InboundStock | null> => {
  try {
    const response = await axios.post<any>(
      `${apiBase}/api/inbound/stock`,
      addInboundStockDTO
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all inbound stocks:", error);
    return null;
  }
};
export const CreateOutboundStock = async (
  addOutboundStockDTO: AddOutboundStockDTO
): Promise<OutboundStock | null> => {
  try {
    const response = await axios.post<any>(
      `${apiBase}/api/outbound/stock`,
      addOutboundStockDTO
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all outbound stocks:", error);
    return null;
  }
};
