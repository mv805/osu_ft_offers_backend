import express from "express";
import userController from "../controllers/userController";
import officeLocationController from "../controllers/officeLocationController";
import previousExperienceController from "../controllers/previousExperienceController"; 
import offerController from "../controllers/offerController";
import offerSourceController from "../controllers/offerSourceController";

const router = express.Router();

// Use controllers
router.use("/users", userController);
router.use("/office-locations", officeLocationController);
router.use("/previous-experiences", previousExperienceController);
router.use("/offers", offerController);
router.use("/offer-sources/", offerSourceController);

export default router;
