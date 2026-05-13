import express from "express"

import { createTalent } from "../controllers/hireTalent.controller.js"

const router = express.Router()

router.post("/", createTalent)


export default router