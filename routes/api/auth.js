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
router.get('/',async (req,res) => {
    try{
        let data = await User.findOne({email : req.body.email});
        console.log(data);
        res.json({data});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//update status of coordinator
router.put("/update",async(req,res) => {
    try {
      await User.findByIdAndUpdate({_id: req.body.id}, {status: req.body.status});
      res.json({msg: "Status of coordinator changed"}); 
    } catch (err) {
      console.error(err.message);
      res.status(500).json({msg: "Server Error"});
    }
  });

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', async (req,res) => {
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



// @route   PATCH api/auth/saveprofile
// @desc    Save changes in profile
router.patch("/saveprofile",async(req,res) => {
    try {
      console.log("asdfghjkl",req.body)
      let user1 = {};
      User.findOne({ _id: req.body._id }, (err, user) => {
        if (err) {
          user = {};
        } else if (user == null) {
          user = {};
        } else {
          user1 = user;
        }
      });
      const salt = await bcrypt.genSalt(10);
      let pass = await bcrypt.hash(req.body.password,salt);
      User.findOneAndUpdate(
        { _id: req.body._id },
        {
            $set: {
                name: req.body.name,
                 
                email:req.body.email,
                  
                password:pass
                 
              },
        },  
        
        {new: true },
        (err, user) => {
          if (err) {
            return res.json({ err: err });
          } else {
           // console.log(req.body)
            user.name = req.body.name,
            user.email = req.body.email,
            user.password = pass
            return res.json({ data: user });
          }

        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).json({msg: err.message});
  }
  });



module.exports = router;