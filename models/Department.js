const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        }
});

module.exports = Department = mongoose.model("department",DepartmentSchema);