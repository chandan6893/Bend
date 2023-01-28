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

const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url);==> '/'
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>AirCampus</title></head>");
    res.write(
      `<body>
              <form action="/message" metod="POST">
              <input type="text" name="mang"> 
              <button type="submit">Send</button> 
              </form>
            </body>`
    );
    res.write("</html>");
    res.end();
  } else if (req.url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      // {
      console.log(chunk);
      body.push(chunk);
      // }
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    console.log(req.body);
  }
});
server.listen(3000);
