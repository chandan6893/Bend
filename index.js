// code s bt step

// const fs=require("fs");
// fs.writeFileSync("apple.txt","This is apple file");



// How to ctete multiple files in a loop

const fs=require('fs');
const path=require('path');
const dirPath= path.join(__dirname,'files');
// "files",is a folder in Backend directory.in which we will crete multiole files.
for(let i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file")
}

// how to read the files created in files folder

fs.readdir(dirPath,(err,files)=>{
    console.log(files);
}) 
// but it will give us the filesin an array
// so to get the files without an array
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})







// AirCampus Bend





// const express = require("express");
// // eventHandler is given to us by expressJs
// const app = express();
// const http = require("http");

// app.use((req,res,next)=>{
//     console.log("firstMiddleware");
//     next();
// });

// app.use((req,res,next)=>{
//  console.log("secondMiddleware")
// });
// const server= http.createServer(app);
// server.listen(3000);
// console.log(app)



// const express = require("express");
// // eventHandler is given to us by expressJs
// const app = express();
// // const http = require("http");

// app.use((req, res, next) => {
//   console.log("firstMiddleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("secondMiddleware");
// });
// // const server = http.createServer(app);
// // server.listen(3000);
// app.listen(3000);



// const express = require("express");
// // eventHandler is given to us by expressJs
// const app = express();
// app.use((req, res, next) => {
//     res.send("Hello Response")
//   console.log("firstMiddleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("secondMiddleware");
// });
// app.listen(3000);


// const express = require("express");
// // eventHandler is given to us by expressJs
// const app = express();
// app.use((req, res, next) => {
//     let isLoggedIn = true;
//     // let isLoggedIn = false;
//     if(isLoggedIn){
//          console.log("Validating User Login");
//           next();
//     }else{
//          res.send("Invalid Credentials");
//     }
// }); 
// app.use((req, res, next) => {
//   res.send("Welcome To FaceBook");
// });
// app.listen(3000);



// const express = require("express");
// const app = express();

// app.use("/home", (req, res, next) => {
//   res.send("Home --> Welcome to facebook");
  
// });

// app.use('/',(req,res,next)=>{
//     res.send("Nothing")
// });

// app.listen(3000);


// const express = require("express");
// const app = express();

// app.use("/home", (req, res, next) => {
//   res.send(`<form action="/message" methyod="Post" >
//              <input type="text" name="mango" >
//              <button type="submit" >SEND</button>
//             </form>`);
// });

// app.use("/message", (req, res, next) => {
//   res.redirect("/home");
// });

// app.use("/",(req,res,next)=>{
//     console.log("hello Guys")
// })
// app.listen(3000);




// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>"
//   );
// });

// app.use("/product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res) => {
//   res.send("home");
// });

// app.listen(3000);



// const express = require('express');
// const bodyParser= require('body-parser');
// const productRoutes = require('./routes/product').router;
// // routes folder mein product file 
// const products = require("./routes/product").products;

// const path = require('path');
// const app = express();
// app.set('view engine','ejs')

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use(productRoutes);

// app.use((req,res,next) => {
//     res.redirect('/products');
// });

// app.listen(3000);

