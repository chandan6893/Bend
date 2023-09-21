const express=require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'public')

// console.log(publicPath)

app.use(express.static(publicPath));
// expree.static() method is used to show static conent like about.html

app.listen(5001);