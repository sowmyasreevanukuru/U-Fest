const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/Register');

// @route   GET api/register/all
// @desc    Register teams
// @access  Public
router.get("/all", async (req, res) => {
    User.find((err, User) => {
      if (err) {
        return res.json({ err: err });
      } else if (User == null) {
        return res.json({ err: "no registrations available" });
      } else {
        return res.json({ data: User });
      }
    });
  });
  

// @route   POST api/register
// @desc    Register teams
// @access  Public
router.post('/',[
    check('name','Please provide name').not().isEmpty(),
    check('enro','Please provide valid enrollment').not().isEmpty(),
    check('email','Please provide valid email address').isEmail(),
    check('department','Please provide department').not().isEmpty(),
    check('contact', 'Provide valid contact number').matches(RegExp("^[6-9]\\d{9}$"))
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    
    const{name,enro,email,department,eventname,contact} = req.body;
    try{

        let registerr = await User.findOne({email});

       
        registerr = new User({
                name,
                enro,
                email,
                department,
                eventname,
                contact
        });

        //save registerr
        await registerr.save();

        const payload = {
            registerr: {
                id: registerr.id
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