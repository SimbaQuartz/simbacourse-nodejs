const productSchema = require("../../models/Product.model");

const createProduct = async (req, res, next) => {
  console.log("Body", req.body);
  const product = new productSchema(req.body);
  await product.save();
  res.send(product);
};

const getProduct = async (req, res, next) => {
  const product = await productSchema.findById(req.params.id);
  res.send(product);
};

const getProducts = async (req, res, next) => {
  const products = await productSchema.find();
  res.send(products);
};

const updateProduct = async (req, res, next) => {
  const product = await productSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, old: false }
  );
  res.send(product);
};

const deleteProduct = async (req, res, next) => {
  const product = await productSchema.findByIdAndDelete(req.params.id);

  res.send("Successfully deleted product");
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
