import { Router } from "express";
import auth from "../../middleware/auth";
import { slidingTextController } from "./slidingText.controller";

export const slidingTextRoutes = Router();

slidingTextRoutes
 .post(
    "/add",
    // auth("admin"),
    slidingTextController.setSlidingText
 )

.get(
    "/",
    // auth("admin"),
    slidingTextController.getSlidingText
)
