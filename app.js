const express=require('express');
const cors = require('cors');
const port=7000;
const app=express();
// const fs=require('fs');
// const fileContent=fs.readFileSync('index.html');


app.use(express.json());

app.post('/student-details',(req,res)=>{
    const { name, usn, semester, branch, college } = req.body;
    const studentDetails = { name, usn, semester, branch, college };
    res.json({ message: 'Student details received successfully', studentDetails
 });
});

// app.get('/student-details', (req, res) => {
//     res.send('GET request to /student-details endpoint');
//   });
  

app.listen(port, ()=>{
    console.log(`Express server running on port ${port}`);
});

