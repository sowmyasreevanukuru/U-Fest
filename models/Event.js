const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventname:{
        type: String,
        required: true
    },
    coordinatorname:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    noofparticipants:{
        type: String,
        required: true
    },
    eventdesc:{
        type: String,
        
    },
    rules:{
        type: String,
        
    }

});

module.exports = Event = mongoose.model('event', EventSchema);
