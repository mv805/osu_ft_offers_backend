import express from "express";
import WorkArrangements from "../models/WorkArrangements";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allWorkArrangements = await WorkArrangements.getAll();
    res.json(allWorkArrangements);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occured while retrieving all the work arrangements.");
  }
});

export default router;
