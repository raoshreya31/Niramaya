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



