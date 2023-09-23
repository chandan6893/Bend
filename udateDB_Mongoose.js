// update database/record
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brnd: String,
  category: String,
});

const updateInDb=async ()=>{
  // const Product=mongoose.model('products',productSchema);
  const Product = mongoose.model("products", productSchema);
  
  let data=await Product.updateOne(
    {name:"m 420"},{$set:{brnd:"maxxx"}}
  );
  console.log(data);
}
updateInDb();