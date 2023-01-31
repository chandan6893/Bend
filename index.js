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


const express = require("express");
const app = express();

app.use("/home", (req, res, next) => {
  res.send(`<form action="/message" methyod="Post" >
             <input type="text" name="mango" >
             <button type="submit" >SEND</button>
            </form>`);
});

app.use("/message", (req, res, next) => {
  res.redirect("/home");
});

app.use("/",(req,res,next)=>{
    console.log("hello Guys")
})
app.listen(3000);