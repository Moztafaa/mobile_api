import Joi from "joi";
import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  coordinates: {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export function validateCreateRestaurant(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    address: Joi.string().trim().min(5).max(100).required(),
    coordinates: Joi.object({
      type: Joi.string().trim().valid("Point"),
      coordinates: Joi.array().items(Joi.number()),
    }),
  });
  return schema.validate(obj);
}
