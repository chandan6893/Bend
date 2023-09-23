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

const deleteInDB=async ()=>{
    const Product=mongoose.model("products",productSchema);

    let data=await Product.deleteOne(
        {name:"Note Pro"}
    );
    console.log(data);
}
// deleteInDB();

const findInDb=async ()=>{
    const Product=mongoose.model("products",productSchema);
    let data=await Product.find(
        // {name:"m 420"}
    );
    console.log(data);
}
findInDb();