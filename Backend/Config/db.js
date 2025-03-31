import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/calculator";

const dbConnection = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
};

export default dbConnection;
