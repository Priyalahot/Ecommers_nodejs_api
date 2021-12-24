const express = require("express");
const { create_product, show_products, show_product, delete_product, update_product } = require("../controller/ProductController");
const product_router = express.Router();

product_router.route("/").post(create_product).get(show_products);

product_router.route("/:id").get(show_product).delete(delete_product).put(update_product);

module.exports = product_router;
