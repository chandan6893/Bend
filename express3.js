const express=require("express");
const path=require("path");

const app=express();

app.set("view engine","ejs");

app.get('/profile',(_,res)=>{
    const user={
        name:"anil",
        email:"anil@test.com",
        city:"Delhi",
        skills:["js","react","mongodb"]    
    }
    res.render("profile",{user});
})

app.get("/login",(_,res)=>{
    res.render("login")
})

app.listen(5000);