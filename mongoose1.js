// mongoose,model,Schema
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const productSchema=new mongoose.Schema(
    {
        name:String,
        price:Number,
        brnd:String,
        category:String
    }
);

const main=async ()=>{
    const Product=mongoose.model('products',productSchema);
    let data=new Product(
        {
            name:"Note Pro",
            price:60000,
            brnd:"Max",
            category:"mobile"
        }
    );

    const result=await data.save();
    console.log(result);
}
main();