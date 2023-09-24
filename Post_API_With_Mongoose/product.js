const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        name:String,
        price:Number,
        brnd:String,
        category:String
    }
);
module.exports=mongoose.model("products",productSchema)