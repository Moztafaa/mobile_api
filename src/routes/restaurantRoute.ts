import Router from "express";
import {
  createRestaurantCtrl,
  getAllRestaurantCtrl,
  getRestaurantByIdCtrl,
} from "../controllers/restaurantController";
import validateObjectId from "../middleware/validateObjectId";
const router = Router();

// /api/restaurants
router.get("/", (req, res) => {
  res.send("Restaurants");
});

// create new restaurant

router.post("/create", createRestaurantCtrl);

// get all restaurants

router.get("/all", getAllRestaurantCtrl);

// get restaurant by id

router.get("/:id", validateObjectId, getRestaurantByIdCtrl);

export { router as restaurantRouter };
