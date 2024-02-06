import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.getAll();
  res.json(users);
});

// Other routes (POST, PUT, DELETE) go here

export default router;
