/**
 * API and SSR
 */

const express = require("express");
const app = express();
// const products = require("./product-data.json");
const products = require("./productData.js");

app.get("/", (request, response) => {
  response.send("<h1>Home Page, Is here?</h1>");
});

app.get("/about", (req, res) => {
  res.json([{ name: "Artti", age: 20 }, { name: "Sahil" }]);
});

app.get("/products", (req, res) => {
  const { search } = req.query;
  console.log(req.query);

  let newProducts = products;
  if (search) {
    newProducts = products.filter(
      (prd) => prd.name.toLowerCase().startsWith(search.toLowerCase()) //Watch -> watch  = W ->w
    );
  }
  res.json({ success: true, data: newProducts });
});

app.get("/products/new", (req, res) => {
  console.log(products);
  // res.send(products);
  const newProducts = products.map((product) => {
    return { id: product.id, name: product.name };
  });
  res.send(newProducts);
});

app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  const newProduct = products.find(
    (product) => product.id === Number(req?.params?.productId)
  );

  if (newProduct) return res.send(newProduct);

  res
    .status(404)
    .send(
      `The product with product id : ${req.params.productId} does not exist in the data`
    );
});

// app.get("/products/1", (req, res) => {
//   res.send(products.find((product) => product.id === 1));
// });

// app.get("/products/2", (req, res) => {
//   res.send(products.find((product) => product.id === 2));
// });

// app.get("/products/3", (req, res) => {
//   res.send(products.find((product) => product.id === 3));
// });

// app.get("/products/4", (req, res) => {
//   res.send(products.find((product) => product.id === 4));
// });

// app.get("/products/5", (req, res) => {
//   res.send(products.find((product) => product.id === 5));
// });

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
