import { ObjectId } from "mongoose";

type TTicketPrices = {
  tribune: number;
  annexeLoge: number;
  logeVIP: number;
  logeVVIP: number;
  serviceFee: number;
  processingFee: number;
};

export interface IEvent {
  image?: string;
  head_to_head?: string;
  name: string;
  category: ObjectId; // could be a reference to Category
  date: Date;
  time: string;
  location: string;
  ticketPrices: TTicketPrices;
  isDeleted?: boolean;
}