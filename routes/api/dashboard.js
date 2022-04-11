const profile=require('../models/Event');
const ErrorResponse=require('../utils/errorResponse');
const User=require('../models/User');

// @desc    Get all bus 
// @route   GET /btbm/bus/getBuses
exports.getBuses= async (req,res,next)=>{

    try {
        const bus= await profile.find();
        if(bus.length==0)
        {
            return next(new ErrorResponse(`No event available`,404));
        }
        res.status(200).json({
         success:true,
         msg:`total number of events ${bus.length}`,
         data:bus
     }); 
    } catch (err) {
     next(new ErrorResponse(`No event available`,401));
    }
    
 }

 // @desc    Get single bus 
// @route   GET /btbm/bus/getBus/:id
exports.getBus= async (req,res,next)=>{
    try {
        const bus=await profile.findById(req.params.id);
 
        if(!bus)
        {
         return next(new ErrorResponse(` not found with id `,404));
        }
        res.status(200).json({
         success:true,
         data:bus
     }); 
    } catch (err) {
     // res.status(400).json({
     //     success:false
     // }); 
     next(new ErrorResponse(`Bus not found with id `,404));
        
    }
}

// // @desc    Add a bus
// // @route   POST /btbm/user/:userId/busRoute
// exports.createBus= async (req,res,next)=>{
//     // req.body.userId=req.params.userId;

//     // const user=await User.findById(req.params.userId);

//     // if(!user)
//     // {
//     //     return next(new ErrorResponse(`User not found with id ${req.params.id}`,404));
//     // }

//     req.body.userId=req.user.id;
//     const bus= await Bus.create(req.body);

//     try {
//         res.status(200).json({
//             msg:'Bus added Successful',
//             data:bus
//         }); 
//     } catch (err) {
//         res.status(400).json({
//             success:false
//         });
        
//     }
// }

// // @desc    Update a bus
// // @route   PUT /btbm/bus/updateBus/:id
// exports.updateBus= async (req,res,next)=>{
//     try {
//         const bus=await Bus.findByIdAndUpdate(req.params.id,req.body,{
//             new:true,
//             runValidators:true
//         });
    
//         if(!bus)
//            {
//             return next(new ErrorResponse(`Bus not found with id ${req.params.id}`,404));
//            }
    
//            res.status(200).json({
//             msg:'Bus Updated Successfully'
//         }); 
        
//     } catch (err) {
//         next(new ErrorResponse(`Bus not found with id ${req.params.id}`,404));
//     }
// }


// // @desc    Delete a bus
// // @route   DELETE /btbm/bus/deleteBus/:id
// exports.deleteBus= async (req,res,next)=>{
//     try {
//         const bus=await Bus.findByIdAndDelete(req.params.id);

//         if(!bus)
//         {
//           return next(new ErrorResponse(`Bus not found with id ${req.params.id}`,404));
//         }

//         next(new ErrorResponse(`Bus deleted with id ${req.params.id}`,201)); 
//     } catch (err) {
//         next(new ErrorResponse(`Bus not found with id ${req.params.id}`,404));  
//     }
// }
