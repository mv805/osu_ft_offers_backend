import express from "express";
import Offer from "../models/Offer";
import { Request } from "express";

const router = express.Router();
const standardErrorMessage = "An unexpected error occured.";

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
    res.status(500).send(standardErrorMessage);
  }
});

router.post("/salaries/groups", async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).send(standardErrorMessage);
  }
});

/**
 * Retrieves the maximum salary from the request query parameters.
 *
 * @param req - The request object containing the query parameters.
 * @returns The maximum salary as a number, or undefined if not provided or invalid.
 * @throws Error if the provided maximum salary is not a valid integer.
 */
function getMax(req: Request): number | undefined {
  let max: number | undefined;
  if (req.query.max && typeof req.query.max === "string") {
    max = parseInt(req.query.max);
  } else if (
    req.query.max &&
    typeof req.query.max !== "string" &&
    typeof req.query.max !== "number"
  ) {
    throw new Error("Max salary required to be an integer");
  } else if (typeof req.query.max === "number") {
    max = req.query.max;
  } else {
    max = undefined;
  }
  return max;
}

router.get("/salaries", async (req, res) => {
  try {
    const max = getMax(req);
    const salaries = await Offer.getAllSalaries(max);
    res.json(salaries);
  } catch (err) {
    console.error(err);
    res.status(500).send(standardErrorMessage);
  }
});

router.get("/salaries/state/:state", async (req, res) => {
  try {
    const state = req.params.state;
    const max = getMax(req);
    const salaries = await Offer.getSalariesByState(state, max);
    res.json({ state: state, salaries: salaries });
  } catch (err) {
    console.error(err);
    res.status(500).send(standardErrorMessage);
  }
});

router.get("/salaries/average", async (req, res) => {
  try {
    const state = req.query.state;
    if (state && typeof state !== "string") {
      res.status(400).send("State must be a string");
      return;
    }

    const max = getMax(req);
    let salaries;
    if (state) {
      salaries = await Offer.getSalariesByState(state, max);
    } else {
      salaries = await Offer.getAllSalaries(max);
    }
    const average = Math.round(
      salaries.reduce((a, b) => a + b, 0) / salaries.length
    );

    if (state) {
      res.json({ state, average });
    } else {
      res.json({ average });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(standardErrorMessage);
  }
});

router.get("/salaries/groups", async (req, res) => {
  try {
    const salariesByGroup = await Offer.getSalaryGroups();

    res.json({ salariesByGroup });
  } catch (err) {
    console.error(err);
    res.status(500).send(standardErrorMessage);
  }
});

export default router;
