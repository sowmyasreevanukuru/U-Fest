const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Event = require('../../models/Event');

// @route   GET api/event/all
// @desc    get all events route
// @access  Private
    router.get("/all", async (req, res) => {
        Event.find((err, User) => {
          if (err) {
            return res.json({ err: err });
          } else if (User == null) {
            return res.json({ err: "no events avalible" });
          } else {
            return res.json({ data: User });
          }
        });
      });

// @route   POST api/event/coordinator
// @desc    get coordinator of specific event
router.post("/cr", async (req, res)=>{
  try {
    
     console.log( req.body.coordinatorname,"kkkk")
      const event = await Event.findOne({coordinatorname: req.body.coordinatorname });
      if(!event){
          return res.status(400).json({ msg: "Event not found"});
      }
      res.json(event);
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
  }
});

//update department
router.put("/updatedesc",async(req,res) => {
  try {
    await Event.findByIdAndUpdate({_id: req.body.id}, {evendesc: req.body.eventdesc},{rules:req.body.rules});
    res.json({msg: "Event updated successfully"}); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({msg: "Server Error"});
}
});

//update event
router.put("/update",async(req,res) => {
  try {
    await Event.findByIdAndUpdate(
      {_id: req.body.id}, 
      {eventname: req.body.eventname},
      {coordinatorname:req.body.coordinatorname},
      {venue:req.body.venue},
      {noofparticipants:req.body.noofparticipants}
    );
    res.json({msg: "Event updated successfully"}); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({msg: "Server Error"});
    
}
});

 
// // @route   GET api/event/cr
// // @desc    get  event according to user route
// // @access  Private
// router.get("/cr", async (req, res) => {
//   Event.find((err, User) => {
//     if (err) {
//       return res.json({ err: err });
//     } else if (User == null) {
//       return res.json({ err: "no events avalible" });
//     } else {
//       return res.json({ data: User });
//     }h
//   });
// });

// // @route   POST api/event/update
// // @desc    update event
// // @access  Private
// router.post("/update", [
//     check("eventname", "Event name required").not().isEmpty()
//   ],async (req, res)=>{
//     let status = false;
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()})
//     }
//     let event = await Event.findOne({ _id:req.body.id });
//       if (!event) {
//         return res.status(400).json({ errors: [{ msg: "Event does not exists" }] });
//       }
//     try {
//         await Event.findByIdAndUpdate({_id: req.body.id}, {eventname: req.body.name});
//         status = true;
//         res.json({status, msg: "Event name updated!"});
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({msg: "Server Error"});
//     }
//   });


// @route   POST api/event
// @desc    add event
// @access  Public
router.post('/',[
    check('eventname','Please provide event name').not().isEmpty(),
    check('coordinatorname','Please provide coordinator name valid ').not().isEmpty(),
    check('venue','Please provide venue').not().isEmpty(),
    check('noofparticipants', 'Please provide no of participants').not().isEmpty(),
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    let c = await Event.findOne({eventname:req.body.eventname});

        //check if user exists 
        if(c){
            return res.status(400).json({errors: [{msg:'Event already exists'}]});
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