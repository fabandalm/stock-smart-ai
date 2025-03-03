import { IOStockCharts, Stats } from "../helpers/declarations";
import axios from "axios";
const apiBase = "http://localhost:8080";

export const GetDashboardStats = async (): Promise<Stats | null> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/dashboard/stats`
    );

    return response.data;
  } catch (error) {
    console.error("Error in list all stocks flows:", error);
    return null;
  }
};
export const GetOutboundStatus = async (): Promise<IOStockCharts[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/dashboard/outbound/status`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const GetInboundStatus = async (): Promise<IOStockCharts[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/api/dashboard/inbound/status`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
