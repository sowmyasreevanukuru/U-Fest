const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    enro:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    department:{
        type: String,
        required: true
    },
    contact:{
        unique:true,
        type: String,
        required: true,
        validate(value){
            if(value.length !=10)
            {
                throw new Error('Invalid contact number')
            }
        }
    }

    //event name and event type
});

module.exports = Register = mongoose.model('register',RegisterSchema);
