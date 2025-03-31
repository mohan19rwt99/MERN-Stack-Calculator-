import express from "express";
import { saveCalculation, getHistory, deleteHistory } from "../controllers/calculationController.js";

const router = express.Router();

router.post("/calculate", saveCalculation);  
router.get("/history", getHistory); 
router.delete("/delete", deleteHistory)        

export default router;


