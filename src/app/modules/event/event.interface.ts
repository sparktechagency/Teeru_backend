import { ObjectId } from "mongoose";
export interface ITicketPrice {
  price: number;
  serviceFee: number;
  processingFee: number;
}

type TTicketPrices = {
  tribune: ITicketPrice
  annexeLoge: ITicketPrice;
  logeVIP: ITicketPrice;
  logeVVIP: ITicketPrice;
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