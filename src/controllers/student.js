const Student = require('../models/student');

exports.getAllStudents = async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(409).json(error.message);
    }
    
}

exports.addStudent = async (req, res) => {
    const {stuID, StudentName, grade, section } = req.body;
    const newStudent = new Student({
        stuID,
        StudentName,
        grade,
        section
    });
    try {
        await newStudent.save();
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

exports.deleteStudent = async (req, res) => {
    const id = req.params.id; // get delete id from url param
    try {
        await Student.findByIdAndDelete(id);
        res.status(200).json(`${id} is deleted`);
    } catch (error) {
        res.status(400).json(error.message);
    }
}