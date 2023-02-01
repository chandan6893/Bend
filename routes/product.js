const express = require('express');

const router = express.Router();

router.use('/products',(req,res)=>{
    res.send('Some products page');
});

router.use('/add-product',(req,res,next)=>{
    res.send(
      "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>"
    );
});

router.use('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;