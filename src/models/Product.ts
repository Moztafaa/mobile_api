import Joi from "joi";
import mongoose from "mongoose";
import { Restaurant } from "./Restaurant";
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

export const Product = mongoose.model("Product", ProductSchema);

// create valite create product with its restaurant

export function validateCreateProduct(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    price: Joi.number().required(),
    restaurant: Joi.string().trim().required(),
  });
  return schema.validate(obj);
}
