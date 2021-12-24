const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var schemaType = mongoose.Schema.Types;

module.exports = mongoose.model("products", 
    (mongoose.Schema(
        {
            product_name: { type: String, require: [true, "Please Enter Product Name"] },
            product_price: { type: schemaType.Double, require: [true, "Please Enter Product Price"] },
            product_unit: { type: String, require: [true, "Please Enter Product Unit"] },
            product_qty: { type: schemaType.Double, require: [true, "Please Enter Product Quantity"] }
        })
    ));

