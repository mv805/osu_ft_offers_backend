import express from "express";
import Offer from "../models/Offer";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allOffers = await Offer.getAll();
    res.json(allOffers);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured while retrieving all the offers.");
  }
});

router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing.");
  }

  try {
    const offerData = req.body;
    const newOfferId = await Offer.create(offerData);

    res.json({ newOfferId: newOfferId });
  } catch (err) {
    console.error(err);
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
    res.status(500).send(errorMessage);
  }
});

export default router;
