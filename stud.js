const express = require('express');
const app = express();
const port=8000;
const students = [
  {
    name: "Shreya",
    usn: "1ABCD123",
    semester: 5,
    branch: "Computer Science",
    college: "DSCE"
  },
  {
    name: "Mandar",
    usn: "2EFGH456",
    semester: 5,
    branch: "Mechanical",
    college: "BMS"
  },
  {
    name: "Rish",
    usn: "1PES25",
    semester: 5,
    branch: "Electrical",
    college: "PES"
  },
];

app.use(express.json());

app.get('/searchByUSN', (req, res) => {
  const usn = req.query.usn; 

  const student = students.find(student => student.usn === usn);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
