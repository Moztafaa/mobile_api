import Router from "express";
import {
  createProductCtrl,
  getAllProductsCtrl,
  getProductByIdCtrl,
  searchProductCtrl,
} from "../controllers/productController";

const router = Router();

// /api/products/create
router.post("/create", createProductCtrl);
  
// get all products
router.get("/all", getAllProductsCtrl);

// get product by id
router.get("/:id", getProductByIdCtrl);

// search by product controller
router.get("/search/:productName", searchProductCtrl);

export { router as productRouter };
