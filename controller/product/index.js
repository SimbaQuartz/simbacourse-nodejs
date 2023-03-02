const createProduct = (req, res, next) => {
  res.send("Post Product");
};

const getProduct = (req, res, next) => {
  res.send("Get Product");
};

const getProducts = (req, res, next) => {
  res.send("Get Products");
};

const updateProduct = (req, res, next) => {
  res.send("update Product");
};

const deleteProduct = (req, res, next) => {
  res.send("delete Product");
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
