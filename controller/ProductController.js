const Product = require("../model/Product");

exports.create_product = async (req,res)=>{
  try {
      const data = await Product.create(req.body);
      res.status(201).json({
          status:true,
          message:"Product created",
          product:data
      })
      
  } catch (error) {
      res.status(401).json({
          status:false,
          message:`Something went wrong! Please try again ${error}`,
          product:null
      })
      
  }
};

exports.show_products = async (req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({
            status:true,
            message:"Retrive successfully",
            products:products
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:`Data not found ${error}`,
            product:null
        })
    }
};

exports.update_product = async(req,res)=>{
    try {
        await Product.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json({
            status:true,
            message:"Data update successfully"
        })
       
    } catch (error) {
        res.status(401).json({
            status:false,
            message:`not updated ${error}`
        })
    }
};

exports.delete_product = async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:true,
            message:"Product deleted successfully"
        })
        
    } catch (error) {
        res.status(401).json({
            status:false,
            message:`not deleted ${error}`
        })
        
    }
};

exports.show_product = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status:true,
            message:"Retrive successfully",
            product:product
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:`Not found ${error}`,
            product:null
        })
        
    }
};