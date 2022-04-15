const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Event = require('../../models/Event');
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator/check');
const config = require('config');
const jwt = require('jsonwebtoken');


// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/',
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    let e=new Event({
        eventname:req.body.eventname,
        coordinatorname:req.body.coordinatorname,
        venue:req.body.venue,
    });
    try{

        let Event = await Event.findOne({eventname : req.body.eventname});

        //check if user exists 
        if(!Event){
           return res.status(400).json({errors: [{msg:'No Event '}]});
        }
        
        const payload = {
            e:{
                id: Event.id,
                eventname:Event.eventname,
                coordinatorname:Event.coordinatorname,
                venue:Event.venue,
            }
        };
        console.log(Event.id);
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token,Event });
                
            }
        ); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  
}); 

module.exports = router;
