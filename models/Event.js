const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
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
        required: true,
        validate(value){
            if(value.length !=10)
            {
                throw new Error('Invalid contact number')
            }
        }
    },
    role:{
        type: String,
        default:'Coordinator' 
    }
});

module.exports = Event = mongoose.model('event', EventSchema);
