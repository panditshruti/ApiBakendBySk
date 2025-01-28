require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json()); // To parse incoming JSON requests

// Predefined array of 50 student details with name, father's name, and mother's name
const studentDetails = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  name: {
    studentName: `Student ${index + 1}`,
    fatherName: `Father of Student ${index + 1}`,
    motherName: `Mother of Student ${index + 1}`,
  },
  marks:{
    matrik:'400',
    intermidiat:'200',
    gradiuation:'555'
  },
  rollNumber: `RN-${index + 1}`,
  className: `Class ${Math.ceil((index + 1) / 10)}` // Grouping students into classes
}));

// Endpoint to retrieve all student details
app.get('/api/students', (req, res) => {
  res.json({students: studentDetails });
});

// Endpoint to fetch a single student by ID
app.get('/api/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = studentDetails.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json({ message: 'Student fetched successfully', student });
});

// Start the server
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
