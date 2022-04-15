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

    let events=new Event({
        eventname:req.body.eventname,
        coordinatorname:req.body.coordinatorname,
        venue:req.body.venue
    });
    try{

        let e = await Event.findOne({eventname : req.body.eventname});

        //check if user exists 
        if(!e){
           return res.status(400).json({errors: [{msg:'Invalid Credentials '}]});
        }
        
        const isMatch = await bcrypt.compare(req.body.eventname,e.eventname);
        if(!isMatch){
            return res
            .status(400) 
            .json({errors: [{msg: 'Invalid Credentials'}]});
        }

        const payload = {
            events:{
                id: e.id,
                eventname:e.eventname,
                coordinatorname:e.coordinatorname,
                venue:e.venue
            }
        };
        console.log(e.id);
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token,e });
                
            }
        ); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

}); 

module.exports = router;
