const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    contact:{
       unique:true,
        type: String,
        validate(value){
            if(value.length !=10)
            {
                throw new Error('Invalid contact number')
            }
        }
    },
    role:{
        type: String,
        default:'C' 
    }
});

module.exports = User = mongoose.model('user',UserSchema);
