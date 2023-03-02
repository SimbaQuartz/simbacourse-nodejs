const express = require("express");

const categories = require("./categories");

const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../../controller/product");

const router = express.Router();

// Product base routes (CRUD routes)

// router.get("/", getProducts);

// router.get("/:id", getProduct);

// router.post("/", createProduct);

// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

//Product Category routes
router.use("/categories", categories);

module.exports = router;
