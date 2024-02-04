// const http= require('http');
// const port=8000;
// const server = http.createServer((req, res)=>{
//     res.end("Hello World!!");
// });

// server.listen(port, ()=>{
//     console.log('Server running on port ${port}');
// });


// const http =require('http');
// const express = require('express')
// const app= express()
// const port = 8000;
// app.get("/shreya", (req,res)=>{
//     res.send("Hi Shreya");
// });

// app.listen(port, ()=>{
//     console.log(`Express server running on port ${port}`);
// });


// const http =require('http');
// const express = require('express')
// const app= express()
// const port = 8000;
// app.get("/nikhil", (req,res)=>{
//     res.send("Hi Nikhil");
// });

// app.listen(port, ()=>{
//     console.log(`Express server running on port ${port}`);
// });


// const http =require('http');
// const express = require('express')
// const app= express()
// const port = 8000;
// app.get("/apple", (req,res)=>{
//     res.send("apple is red in color");
// });

// app.listen(port, ()=>{
//     console.log(`Express server running on port ${port}`);
// });


const http =require('http');
const express = require('express')
const app= express()
const port = 8000;
app.get("/nikhil", (req,res)=>{
    res.send("Hi Nikhil");
});

app.get("/shreya", (req,res)=>{
    res.send("Hi Shreya");
});
app.get("/apple", (req,res)=>{
    res.send("Apple is red in color");
})

app.listen(port, ()=>{
    console.log(`Express server running on port ${port}`);
});



