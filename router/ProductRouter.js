const express = require("express");
const { check } = require("express-validator");
const { create_product, show_products, show_product, delete_product, update_product } = require("../controller/ProductController");
const product_router = express.Router();

product_router.route("/").post([
    check('product_name')
        .notEmpty().withMessage('Please Enter Product Name..')
        .isLength({ min: 3 }).isString().withMessage('must be at least 3 chars string..'),
    check('product_price')
        .notEmpty().withMessage('Please Enter Product Price..')
        .matches(/\d/).withMessage('only number'),
    check('product_unit')
        .notEmpty().withMessage('Please Enter Product Unit..')
        .isString().withMessage('must be string..'),
    check('product_qty')
        .notEmpty().withMessage('Please Enter Product Quantity..')
        .matches(/\d/).withMessage('only number'),

], create_product).get(show_products);

product_router.route("/:id").get(show_product).delete(delete_product).put(update_product);

module.exports = product_router;
