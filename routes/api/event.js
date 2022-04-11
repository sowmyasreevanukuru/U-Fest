const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Event = require('../../models/Event');

// @route   POST api/event
// @desc    Register route
// @access  Public
router.post('/',[
    check('eventname','Please provide event name').not().isEmpty(),
    check('coordinatorname','Please provide coordinator name valid ').not().isEmpty(),
    check('venue','Please provide venue').not().isEmpty(),
    check('noofparticipants', 'Please provide no of participants').not().isEmpty(),
    check('eventdesc','Please provide event description').not().isEmpty(),
    check('rules','Please provide rules').not().isEmpty(),
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    const{eventname,coordinatorname,venue,noofparticipants,eventdesc,rules} = req.body;
    try{

        let event = await Event.findOne({eventname});

        event = new Event({
            eventname,
            coordinatorname,
            venue,
            noofparticipants,
            eventdesc,
            rules
        });
        //save user
        await event.save();

        const payload = {
            event: {
                id: event.id
            }
        };
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
        ); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
   // res.send('Co-ordinator Registered!');
}); 

module.exports = router;