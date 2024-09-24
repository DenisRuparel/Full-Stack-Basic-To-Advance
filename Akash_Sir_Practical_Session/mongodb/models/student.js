const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    mobile: Number,
});
  
const Student = mongoose.model('student', studentSchema);
  
module.exports = Student;