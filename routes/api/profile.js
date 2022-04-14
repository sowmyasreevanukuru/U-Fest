const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const {check,validationResult} = require('express-validator/check');

// router.get("/all", async (req, res) => {
//     User.find((err, User) => {
//       if (err) {
//         return res.json({ err: err });
//       } else if (User == null) {
//         return res.json({ err: "no profile avalible" });
//       } else {
//         return res.json({ data: User });
//       }
//     });
//   });
  
// // @route   POST api/users
// // @desc    Register route
// // @access  Public
// router.post('/',
// async (req,res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty())
//     {
//         return res.status(400).json({errors: errors.array()});
//     }

//     const salt = await bcrypt.genSalt(10);
//     let user = new User ({
//         name:req.body.name,
//         email:req.body.email,
//         password: await bcrypt.hash(req.body.password,salt),
//         department:req.body.department
//     });
//     //const{name,email,password,department} = req.body;

// }); 

// module.exports = router;

// const app = express();
// app.listen(3000, () => console.log('listen at 3000'));
// app.use(express.static('public'));
// app.use(express.json({ limit: '1mb' }));
// app.post('/api', (request, response) => {
//     console.log('got the request');
//     console.log(request.body);    
//     const data = request.body;
//     response.json({
//         status: 'success',
//         name: data.name,
//         enro: data.enro,
//         email: data.email,
//         department: data.department,
//         contact: data.contact
//     })
// });


// @route   GET api/profile/me 
// @desc    GET current user's profole
// @access  Private
// router.get('/me',auth, async(req,res) => {
//     try{
//         const profile = await Profile.findOne({ user: req.user.id}).populate('user',
//         ['name','department','email','password','contact','role']);

//         if(!profile){
//             return res.status(400).json({msg: 'There is no profile for this user'});
//         }
//         res.json(profile);
//     }catch(err){
//         console.error(err.message);
//         res.status(500).send("Server Error"); 
//     }
// });

// @route   POST api/profile
// @desc    Create or Update user profile
// @access  Private
router.post(
    '/',
    [
        auth, 
        [
           
        ]
    ],
    async(req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {
            
        } = req.body

        //build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        try{
            let profile = Profile.findOne({ user: req.user.id});
            if (profile){
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id},
                    {$set: profileFields},
                    { new: true}
                );
                return res.json(profile);
            }
            //create 
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
        }catch(err){
            console.error(err.message)
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;