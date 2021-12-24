const express = require("express");

const db = require("./config/db");

const product_router = require("./router/ProductRouter");

db(); 

const app = express();

app.use(express.json());

app.use("/api/v1/products",product_router);

app.get('/hh', function(req, res){
    res.write("Welcome");
    res.end();
});

app.listen(8080,function(){
    console.log("server start");
});