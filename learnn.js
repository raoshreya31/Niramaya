const http=require('http');
const fs=require('fs');
const fileContent=fs.readFileSync('learn.html');
const port=8000;
const server = http.createServer((req,res)=>{
    res.end(fileContent)
});

server.listen(port, ()=>{
    console.log('Server running on port ${port}');
});