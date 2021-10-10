const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    stuID: Number,
    StudentName: String,
    grade: Number,
    section: {
        type: String,
        default: 'A'
    }
});

const student = mongoose.model('student', studentSchema);

module.exports = student;