const { Decimal128 } = require("mongodb");
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    min: 3,
  },
  price: {
    type: Decimal128,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = model("product", productSchema);
