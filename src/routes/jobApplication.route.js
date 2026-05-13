import express from "express";
import { createJobApplication } from "../controllers/jobApplication.controller.js";


const router = express.Router()

router.post("/", createJobApplication)

export default router