const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register route
// @access  Public
router.post('/',[
    check('name','Please provide name').not().isEmpty(),
    check('email','Please provide valid email address').isEmail(),
    check('password','Enter a password with minimum 6 characters').isLength({min: 6}),
    check('contact', 'Provide valid contact number').matches(RegExp("^[6-9]\\d{9}$"))
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    
    const{name,email,password,contact,department} = req.body;
    try{

        let user = await User.findOne({email});

        //check if user exists 
        if(user){
           return res.status(400).json({errors: [{msg:'User already exists'}]});
        }
        user = new User({
            name,
            email,
            password,
            contact,
            department
        });

        //encrypt using bcrypt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        //save user
        await user.save();

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.send('Co-ordinator Registered!');
}); 

module.exports = router;