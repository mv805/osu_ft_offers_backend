import express from "express";
import OfficeLocation from "../models/OfficeLocation";

const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const officeLocations = await OfficeLocation.getAll();
    res.json(officeLocations);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured while retrieving all the locations.")
  }
});

router.get("/id/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send("ID must be an integer");
  }

  try {
    const location = await OfficeLocation.getByID(id);

    if (location.length === 0) {
      return res.status(404).send("No office location found with this ID.");
    }

    res.json(location);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occurred while retrieving the office location by ID.");
  }
});

router.get("/shortcode/:shortcode", async (req, res) => {
  const shortCode = req.params.shortcode;

  try {
    const location = await OfficeLocation.getByShortCode(shortCode);

    if (location.length === 0) {
      return res
        .status(404)
        .send("No office location found with this short code");
    }

    res.json(location);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occurred while retrieving the office location.");
  }
});

router.get("/full-name/:fullName", async (req, res) => {
  const fullName = req.params.fullName;

  try {
    const location = await OfficeLocation.getByFullName(fullName);

    if (location.length === 0) {
      return res
        .status(404)
        .send("No office location found with this full name.");
    }

    res.json(location);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occurred while retrieving the office location.");
  }
});

export default router;
