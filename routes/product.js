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
// const path = require('path');

const router = express.Router();

const products=[];
router.get("/products", (req, res,next) => {
  res.render("product",{
    products:products,
  });
});

router.get("/add-product", (req, res,next) => {
  res.render('add-product');
});

router.post("/add-product", (req, res,next) => {
  products.push(req.body.title)
  console.log(products);
  res.redirect('/product');
});

// router.get("/product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// module.exports = router;
exports.router = router;
exports.products = products;
