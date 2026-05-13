import express from "express"
import { createBookCall } from "../controllers/bookCall.controller.js"
import { acceptBooking } from "../controllers/bookCall.controller.js"
import { rejectBooking } from "../controllers/bookCall.controller.js"


const router = express.Router()

router.post("/", createBookCall)
router.get("/accept/:id", acceptBooking)
router.get("/reject/:id",rejectBooking)


export default router;