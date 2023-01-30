// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log("Hello Backend");
// });
// server.listen(3000)

// const http = require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.write('hi');
//     res.end();
// });
// server.listen(3000)

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write("<head><title>AirCampus</title></head>");
//     res.write('<body><h1>Hello Guys</h1><input></body>');
//     res.write('</html>');
//     res.end();
// });
// server.listen(3000);

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader("Content-Type", "text/html");
//     if(req.url==='/'){
//         res.write("Home");
//     }else if(req.url==="/about"){
//         res.write("About")
//     }else{
//         res.write("Page Not Found")
//     }
//     res.end()
// });
// server.listen(3000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   // console.log(req.url);==> '/'
//   res.setHeader("Content-Type", "text/html");
//   if (req.url === "/") {
//     res.write("<html>");
//     res.write("<head><title>AirCampus</title></head>");
//     res.write(
//       `<body>
//               <form action="/message" metod="POST">
//               <input type="text" name="mang"> 
//               <button type="submit">Send</button> 
//               </form>
//             </body>`
//     );
//     res.write("</html>");
//     res.end();
//   } else if (req.url === "/message") {
//     const body = [];
//     req.on("data", (chunk) => {
//       // {
//       console.log(chunk);
//       body.push(chunk);
//       // }
//     });

//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//     });
//     console.log(req.body);
//   }
// });
// server.listen(3000);



const http = require('http');
const fs = require('fs');

const handler = (req,res)=>{
  console.log(req.url);
  res.setHeader('Content-Type','text/html');
  let url = req.url;
  let method= req.method;
  if(url==='/'){
    res.write('<html>');
    res.write('<head><title>AirCampus</title></head>');
    res.write(
      `<body>
          <form action="/message" methyod="Post" >
            <input type="text" name="mango" >
            <button type="submit" >SEND</button>
          </form>
      </body>`
    );
    res.write('</html>');
    res.end();
  } else if(url=== '/message'  && method === 'POST'){
    const body=[];
    req.on('data',(chunk)=> {
      {
        console.log(chunk);
        body.push(chunk);
      }
    });

    req.on('end',() => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    console.log(req.body);
    fs.writeFileSync('message.txt', 'Hello');
    // res.statusCide = 302;/
    // res.setHeader('Location','/');

    // or,

    res.writeHead(302,{
      Location: 'https://www.google.com',
    });
    
    res.end();
  }
};

const server = http.createServer(handler);
server.listen(3000);