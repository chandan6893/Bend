const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
//   console.log("reqFilter...");

if(!req.query.age){
    res.send("Please provide age");
}else if(req.query.age<18){
    res.send("You can not access this page")
}else{
  next();
}
  
};
app.use(reqFilter);

app.get("", (req, res) => {
  res.send("This Is Home Page");
});
// .get(),provides routes
app.get("/about", (req, res) => {
  res.send("This is About Page");
});
app.listen(5000);
