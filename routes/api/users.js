const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route   GET api/users/all
// @desc    Get user all
// @access  Public
//router.get("/all", auth, async (req, res) => {
router.get("/all", async (req, res) => {
    User.find((err, User) => {
      if (err) {
        return res.json({ err: err });
      } else if (User == null) {
        return res.json({ err: "no profile avalible" });
      } else {
        return res.json({ data: User });
      }
    });
  });
  


// @route   POST api/users
// @desc    Register route
// @access  Public
router.post('/',
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    let user = new User ({
        name:req.body.name,
        email:req.body.email,
        password: await bcrypt.hash(req.body.password,salt),
        department:req.body.department
    });
    //const{name,email,password,department} = req.body;
    try{
        console.log(user);
        let c = await User.findOne({email:req.body.email});

        //check if user exists 
        if(c){
            return res.status(400).json({errors: [{msg:'User already exists'}]});
         }

        //save user
        user.save();

        const payload = {
            user: {
                id: user.id
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

// @route   POST api/users/password-reset
// @desc    Send password reset link
// @access  


// @route   POST api/users/password-reset/:userId/:token
// @desc    Reset password
// @access  


module.exports = router;