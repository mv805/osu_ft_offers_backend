import express from "express";
import OfferSource from "../models/OfferSource";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allOfferSources = await OfferSource.getAll();
    res.json(allOfferSources);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured while retrieving all the offer sources.");
  }
});


export default router;
