import { evaluate } from "mathjs";
import Calculation from "../modles/Calculation.js";

export const saveCalculation = async (req, res) => {
    try {
        console.log("hello")
        const { expression } = req.body;
        if (!expression) {
            return res.status(400).json({ error: "Expression is required" });
        }

        // Evaluate the expression safely
        const result = evaluate(expression);

        // Save to database
        const newCalculation = new Calculation({ expression, result });
        await newCalculation.save();

        res.status(201).json({ result });
    } catch (error) {
        console.error("Calculation error:", error);
        res.status(500).json({ error: "Failed to evaluate expression" });
    }
};


export const getHistory = async (req, res) => {
    try {
        const history = await Calculation.find()
        res.status(200).json(history);
    } catch (error) {
        console.error("Fetch history error:", error);
        res.status(500).json({ error: "Failed to fetch history" });
    }
};

export const deleteHistory = async (req,res)=>{
    try{
        const deleteData = await Calculation.deleteMany();
        res.status(200).json(deleteData)
    }catch(err){
        console.error("error",err)
    }
}

