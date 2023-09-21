const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>")
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="username" />
    <button>Click Here</button>
    <a href="/" >Go to home page</a>
    `)
})

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'Anil',
            email:"anil@gmail.com"
        },
        {
            name:"Sam",
            email:"sam@test.com"
        }
    ])
})
app.listen(5000);