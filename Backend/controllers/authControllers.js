import User from "../modles/User.js";
import express from "express"

let app = express();

app.use(express.json()); // midleware

export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      console.log("users",users);
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };

