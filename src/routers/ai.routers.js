import { Router } from "express"
import { getresponse } from "../controllers/ai.controllers.js"
const router = Router()

router.post("/get-response", getresponse )


export default router