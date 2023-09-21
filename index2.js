const express=require('express');
const app=express();
const reqFilter=require("./middleware2");

const route=express.Router();


route.use(reqFilter.reqFilter);

app.get("/",(req,res)=>{
    res.send("Welcome tohome PAge");
})

app.get("/users",(req,res)=>{
    res.send("Welcome to users page");
})

route.get("/about", (req, res) => {
  res.send("Welcome to About... page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to CONTACT.. page");
});

app.use("/",route);
app.listen(5000)
