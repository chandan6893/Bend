const express=require('express');
const app=express();

const reqFilter=(req,res,next)=>{
    console.log("reqFilter...");
    next();
}
app.use(reqFilter);

app.get("", (req, res) => {
  res.send("This Is Home Page");
});
// .get(),provides routes
app.get("/about", (req, res) => {
  res.send("This is About Page");
});
app.listen(5000)