// server
import express from "express";
import cors from "cors";
import dbConnection from "./Config/db.js";
import calculatorRoutes from "./routes/api.js"; 

const app = express();
const PORT = 5000;

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api", calculatorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



