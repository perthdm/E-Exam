const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    faculty: {
        type: String,
        required: true
    }
});


const Student = mongoose.model('student', studentSchema , 'student');

module.exports = Student;