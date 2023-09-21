const dbConnect=require('./mongodb');
const express=require('express');

const app=express();

app.use(express.json());

app.put('/',async (req,res)=>{
    const data= await dbConnect();
    const result=data.updateOne({price:'Rs00'},{$set:req.body})
    res.send(result);
})
app.listen(5000)