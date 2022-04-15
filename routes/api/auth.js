const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator/check');
const config = require('config');
const jwt = require('jsonwebtoken');

// @route   GET api/auth   
// @desc    get current logged in user
// @access  Public
router.get('/',auth,async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        console.log(user);
        res.json({user});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

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

    let user_login=new User({
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
    });
    try{

        let user = await User.findOne({email : req.body.email});

        //check if user exists 
        if(!user){
           return res.status(400).json({errors: [{msg:'Invalid Credentials '}]});
        }
        
        const isMatch = await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            return res
            .status(400) 
            .json({errors: [{msg: 'Invalid Credentials'}]});
        }

        const payload = {
            user_login:{
                id: user.id,
                email:user.email,
                role:user.role,
            }
        };
        console.log(user.id);
        console.log(user.email);
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token,user });
                
            }
        ); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
   // res.send('Co-ordinator Registered!');
}); 

module.exports = router;