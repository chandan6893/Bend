// const express = require('express');

// const router = express.Router();

// router.use('/products',(req,res)=>{
//     res.send('Some products page');
// });

// router.use('/add-product',(req,res,next)=>{
//     res.send(
//       "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>"
//     );
// });

// router.use('/product',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

// module.exports=router;


const express = require("express");
const path = require('path');

const router = express.Router();

const products=[];
router.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "product.html"));
});

router.get("/add-product", (req, res,next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post("/add-product", (req, res,next) => {
  products.push(req.body.title)
  console.log(products);
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.get("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// module.exports = router;
exports.router = router;
exports.products = products;
