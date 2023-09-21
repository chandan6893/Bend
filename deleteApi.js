const dbConnect=require('./mongodb');
const mongodb=require('mongodb');

const express=require('express');
const app=express();

app.use(express.json());

app.delete('/:id',async (req,res)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result=await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result)
})
app.listen(5000);