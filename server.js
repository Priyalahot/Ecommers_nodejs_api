const express = require("express");

const db = require("./config/db");

const product_router = require("./router/ProductRouter");

db(); 

const app = express();

app.use(express.json());

app.use("/api/v1/products",product_router);

app.listen(process.env.PORT,()=>{
    console.log("server start");
});