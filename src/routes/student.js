const express = require('express');
const router = express.Router();
const { getAllStudents, addStudent, deleteStudent } = require('../controllers/student');

router.get('/', getAllStudents);
router.post('/add', addStudent);
router.delete('/:id', deleteStudent)

module.exports = router;