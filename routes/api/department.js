const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const Department = require('../../models/Department');
const auth = require('../../middleware/auth');

// @route   GET api/departments/all
// @desc    display all departments
// @access  Public
//router.get("/all", auth, async (req, res) => {
router.get("/all", async (req, res) => {
    Department.find((err, Department) => {
      if (err) {
        return res.json({ err: err });
      } else if (Department == null) {
        return res.json({ err: "no profile avalible" });
      } else {
        return res.json({ data: Department });
      }
    });
  });
  
//   // @route   PUT api/departments/update
//   // @desc    update existing department
//   // @access  Private
//   exports.updateCompany = asyncHandler(async (req, res, next) => {
//   const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   if (!company) {
//     return next(
//       new ErrorResponse(
//         `Company can not find with this id ${req.params.id}`,
//         404
//       )
//     );
//   }

//   res.status(200).json({ success: true, data: company });
// });


// @route   POST api/departments
// @desc    Register route
// @access  Public
router.post('/',
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    let department = new Department ({
        name:req.body.name
    });
    const{name} = req.body;
    try{
        console.log(department);
        let c = await Department.findOne({name});

        //check if user exists 
        if(c){
            return res.status(400).json({errors: [{msg:'Department already exists'}]});
         }

        //save user
        department.save();

        const payload = {
            department: {
                id: department.id
            }
        };
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token,department });
            }
        ); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
   // res.send('Co-ordinator Registered!');
}); 

module.exports = router;