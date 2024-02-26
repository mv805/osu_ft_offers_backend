import express from "express";
import PreviousDegree from "../models/PreviousDegree";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPreviousDegrees = await PreviousDegree.getAll();
    res.json(allPreviousDegrees);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured while retrieving all the data.");
  }
});

router.get("/id/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send("ID must be an integer");
  }

  try {
    const degree = await PreviousDegree.getByID(id);

    if (degree.length === 0) {
      return res.status(404).send("Degree not found.");
    }

    res.json(degree);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while retrieving the degree.");
  }
});

router.get("/degree-type/:degreeType", async (req, res) => {
  const degreeType = req.params.degreeType;

  try {
    const degree = await PreviousDegree.getByType(degreeType);

    if (degree.length === 0) {
      return res.status(404).send("No degree found by that type.");
    }

    res.json(degree);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "An error occurred while retrieving the previous degree by type."
      );
  }
});

export default router;
