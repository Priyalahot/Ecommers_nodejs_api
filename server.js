const express = require("express");

const db = require("./config/db");

const product_router = require("./router/ProductRouter");

db(); 

const app = express();

app.use(express.json());

app.use("/api/v1/products",product_router);

PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
});