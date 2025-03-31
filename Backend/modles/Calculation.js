import mongoose from "mongoose";

const calculationSchema = new mongoose.Schema({
    expression: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Calculation = mongoose.model("Calculation", calculationSchema);

export default Calculation;

  