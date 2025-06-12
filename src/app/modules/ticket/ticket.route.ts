import { Router } from "express";
import auth from "../../middleware/auth";
import { ticketController } from "./ticket.controller";

export const ticketRoutes = Router();

ticketRoutes
 .post(
    "/buy",
    auth("user", 'admin'),
    ticketController.buyTicket
 )

.get(
    "/myTickets",
    auth("user", 'admin'),
    ticketController.getUserTickets
)

// .get(
//     "/:ticketId",
//     auth("")
// )