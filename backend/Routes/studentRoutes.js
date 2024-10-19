const express = require("express");
const router = express.Router();
const { getStudents, addStudent, updateStudent, deleteStudent } = require('../Controllers/studentController'); // Ensure 'updateStudent' is being imported

// Route for fetching all students
router.get("/GetStudents", getStudents);

// Route for adding a new student
router.post("/AddStudent", addStudent);

// Route for updating an existing student
router.put("/UpdateStudent/:id", updateStudent);  // Error likely here

// Route for deleting a student
router.delete("/DeleteStudent/:id", deleteStudent);

module.exports = router;


