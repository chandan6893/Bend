const express=require('express');
const dbConnect=require('./mongodb');
const app=express();

app.use(express.json());
// api with mongodb, make API for get data,testwith postman
// GET API

app.get("/",async (req,res)=>{
    let data= await dbConnect();
    data= await data.find().toArray();
    console.log(data)
    res.send(data);
})


 
// post API

app.post('/',async (req,res)=>{
    console.log(req.body)
    let data=await dbConnect();
    let result= await data.insertOne(req.body)

    res.send(result)
})

// put API

app.put("/",async (req,res)=>{
    let data=await dbConnect();
    let result = data.updateOne(
        {name:"note 5"},{$set:req.body}
        )
        res.send(result)
})

app.listen(5000)