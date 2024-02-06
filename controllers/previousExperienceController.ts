import express from "express";
import PriorExperience from "../models/PriorExperience";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPreviousExperiences = await PriorExperience.getAll();
    res.json(allPreviousExperiences);
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
    const experience = await PriorExperience.getByID(id);

    if (experience.length === 0) {
      return res.status(404).send("Experience not found.");
    }

    res.json(experience);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while retrieving the experience.");
  }
});

router.get("/experience-type/:type", async (req, res) => {
  const experienceType = req.params.type;

  try {
    const experience = await PriorExperience.getByType(experienceType);

    if (experience.length === 0) {
      return res.status(404).send("No experience found by that type.");
    }

    res.json(experience);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "An error occurred while retrieving the previous experience by type."
      );
  }
});

export default router;
