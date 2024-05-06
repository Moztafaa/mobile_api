import asyncHandler from "express-async-handler";
import { Restaurant, validateCreateRestaurant } from "../models/Restaurant";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

// create new restaurant
export const createRestaurantCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { error } = validateCreateRestaurant(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let restaurant = await Restaurant.findOne({ name: req.body.name });
    if (restaurant) {
      return res.status(400).json({ message: "restaurant already exist" });
    }
    restaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      coordinates: req.body.coordinates,
    });
    await restaurant.save();
    res.status(201).json({ message: "restaurant created successfully" });
  }
);

// get all restaurants
export const getAllRestaurantCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  }
);

// get single restaurant by id
export const getRestaurantByIdCtrl = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    res.status(200).json(restaurant);
  }
);


