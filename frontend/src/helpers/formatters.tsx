import { InboundStock, IOStock, OutboundStock } from "./declarations";

// utils/truncate.ts
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
export const IOMapper = (
  inboundStock: InboundStock[],
  outboundStock: OutboundStock[]
): IOStock[] => {
  const ioStock: IOStock[] = [
    ...inboundStock.map((inbound) => ({
      id: inbound.id,
      type: "Inbound",
      facilitator: inbound.supplier.name,
      product: inbound.product.name,
      quantity: inbound.quantity,
      date: new Date(inbound.date), // Convert string to Date
    })),
    ...outboundStock.map((outbound) => ({
      id: outbound.id,
      type: "Outbound",
      facilitator: outbound.destination,
      product: outbound.product.name,
      quantity: outbound.quantity,
      date: new Date(outbound.date), // Convert string to Date
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  return ioStock;
};
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
