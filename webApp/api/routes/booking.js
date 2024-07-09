import { createBooking, deleteBooking, getBooking, getBookingByUser } from "../controllers/booking.js";
import express from "express";

const router = express.Router();

router.post("/",createBooking);

router.get("/:id",getBooking);

router.get("/users/:userId",verifyT,getBookingByUser);

router.put("/:id/cancel",deleteBooking)

export default router;