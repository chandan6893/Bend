const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("This Is Home Page")
});
// .get(),provides routes 
app.get('/about',(req,res)=>{
    res.send("This is About Page")
})

app.get('/help',(req,res)=>{
    res.send("This Is Help Page...")
})
app.listen(5000)