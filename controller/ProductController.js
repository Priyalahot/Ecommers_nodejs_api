const { success, failure } = require("../interface/ApiResponse");
const Product = require("../model/Product");

exports.create_product = async (req,res)=>{
  try {
      const product = await Product.create(req.body);
      res.status(201).json(success(true,"Product created",product));      
  } catch (error) {
      res.status(401).json(failure(false,`Something went wrong! Please try again ${error}`,[]));    
  }
};

exports.show_products = async (req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(success(true,"Retrive successfully",products));
    } catch (error) {
        res.status(401).json(failure(false,`Something went wrong! Please try again ${error}`,[]));
    }
};

exports.update_product = async(req,res)=>{
    try {
        await Product.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(success(true,"Data update successfully",[]));       
    } catch (error) {
        res.status(401).json(failure(false,`Something went wrong! Please try again ${error}`,[]));
    }
};

exports.delete_product = async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(success(true,"Deleted successfully",[]));
    } catch (error) {
        res.status(401).json(failure(false,`Something went wrong! Please try again ${error}`,[]));     
    }
};

exports.show_product = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(success(true,"Retrive successfully",product));
    } catch (error) {
        res.status(401).json(failure(false,`Something went wrong! Please try again ${error}`,[]));
    }
};