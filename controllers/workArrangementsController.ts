import express from "express";
import WorkArrangement from "../models/WorkArrangement";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allWorkArrangements = await WorkArrangement.getAll();
    res.json(allWorkArrangements);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occured while retrieving all the work arrangements.");
  }
});

export default router;
