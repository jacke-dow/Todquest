import express from "express"
import { WorkSnap } from "../controllers/worksnapsController.js"
const router = express.Router()

router.post("/worksnaps", WorkSnap)

export default router
