import express from "express"
import { LoopTimeController, StudentController } from "../controllers/studentController.js"

const router = express.Router()

router.post("/students", StudentController)
router.get("/students-time", LoopTimeController)

export default router
