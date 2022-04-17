const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const Department = require('../../models/Department');
const auth = require('../../middleware/auth');

// @route   GET api/departments/all
// @desc    display all departme
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
  
router.delete('/delete:_id',async(req,res) => {
  try {
    const dept = await Department.findOne({_id: req.params.id });
    if(!dept){
        return res.status(400).json({ msg: "department not found"});
    }
    dept.deleteOne({_id:req.params.id})
    res.json(dept);
} catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
}
 // Department.deleteOne({_id:new objectID(req.param.id)},)
});
//   // @route   PUT api/departments/updatees
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

// @route   POST api/department/delete
// @desc    delete department
// @access  Public
// app.delete('api/deletedept/delete/:id', (req, res, next) => {
//   departments.deleteOne({ _id: new objectID(req.params.id) }, (err, result) => {
//       if(err)
//       {
//           throw err;
//       }
//       res.send(result);
//   });
// });


// @route   POST api/department/
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

// @route   POST api/departments/update
// @desc    update department
// @access  Private
// router.put("/update", auth, async (req, res) => {
//   let dept = req.body.name;
//     Department.find(async(err, dept) => {
//       if (err) {
//         return res.json({ err: err });
//       } else if (Department == null) {
//         return res.json({ err: "no department" });
//       } else {
//         let c = await Department.findOne({name: dept});
//         //check if department exists 
//         if(c){
//             return res.status(400).json({errors: [{msg:'Department already exists'}]});
//          }
//          //let olddept = req.body.oldname;
//          //await Department.findOneAndUpdate({name: olddept}, {name: dept})
//          const olddept = { name: req.body.oldname };
//          await Department.findOneAndUpdate(olddept, {name: dept})
         
//          res.status(200).json({msg: "Department updated successfully"})
//       }
//     });
//   });
module.exports = router;