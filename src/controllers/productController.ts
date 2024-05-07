import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Product, validateCreateProduct } from "../models/Product";
import { Restaurant } from "../models/Restaurant";

// create new product

export const createProductCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { error } = validateCreateProduct(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let product = await Product.findOne({ name: req.body.name });
    if (product) {
      return res.status(400).json({ message: "product already exist" });
    }
    product = new Product({
      name: req.body.name,
      price: req.body.price,
      restaurant: req.body.restaurant,
    });
    await product.save();

    // Find the restaurant/cafe and add the new product to its products array
    const restaurant = await Restaurant.findById(req.body.restaurant);
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    restaurant.products.push(product._id);
    await restaurant.save();

    res.status(201).json({ message: "product created successfully" });
  }
);

// get all products
export const getAllProductsCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const products = await Product.find();
    res.status(200).json(products);
  }
);

// get product by id
export const getProductByIdCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(product);
  }
);

// search by product controller

export const searchProductCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { productName } = req.params;
    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    if (products.length === 0) {
      return res.status(404).json({ message: "product not found" });
    }
    const restaurantIds = products.map((product) => product.restaurant);

    const restaurants = await Restaurant.find({
      _id: { $in: restaurantIds },
    });

    res.status(200).json({ products });
  }
);
