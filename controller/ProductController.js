const { validationResult } = require("express-validator");
const { api_response } = require("../interface/ApiResponse");
const Product = require("../model/Product");
const paginate = require('express-paginate');

exports.create_product = async (req,res)=>{
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

      const product = await Product.create(req.body);
      res.status(201).json(api_response(true,"Product created",product));      
  } catch (error) {
      res.status(401).json(api_response(false,`Something went wrong! Please try again ${error}`,[]));    
  }
};

exports.show_products = async (req,res)=>{
    try {
        const [ results, itemCount ] = await Promise.all([
            Product.find({}).limit(req.query.limit).skip(req.skip).lean().exec(),
            Product.count({})
          ]);
        const pageCount = Math.ceil(itemCount / req.query.limit);
        res.json({
            object: 'list',
            has_more: paginate.hasNextPages(req)(pageCount),
            data: results
          });
        // const products = await Product.find();
        // res.status(200).json(api_response(true,"Retrive api_responsefully",products));
    } catch (error) {
        res.status(401).json(api_response(false,`Something went wrong! Please try again ${error}`,[]));
    }
};

exports.update_product = async(req,res)=>{
    try {
        await Product.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(api_response(true,"Data update api_responsefully",[]));       
    } catch (error) {
        res.status(401).json(api_response(false,`Something went wrong! Please try again ${error}`,[]));
    }
};

exports.delete_product = async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(api_response(true,"Deleted api_responsefully",[]));
    } catch (error) {
        res.status(401).json(api_response(false,`Something went wrong! Please try again ${error}`,[]));     
    }
};

exports.show_product = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(api_response(true,"Retrive api_responsefully",product));
    } catch (error) {
        res.status(401).json(api_response(false,`Something went wrong! Please try again ${error}`,[]));
    }
};