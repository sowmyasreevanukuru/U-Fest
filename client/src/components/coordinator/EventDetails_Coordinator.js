import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import { isDisturbed } from 'form-data';
import { keys } from '@material-ui/core/styles/createBreakpoints';

function EventDetails_Coordinator() {
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    
    }
//     //coordinatorname: "Neshi Bhakta"
// eventdesc: "Group dance event where each team can have maximum 5 participants. Teams will be judged by their creativity, costumes and other aspects.Contact coordinators for information."
// eventname: "Dance"
// noofparticipants: "5"
// rules: "1. maximum 5 participants, 2.Should report atleast 15 minutes before event"
// venue: "20/05/2022 11:00 pushpam hall"
        //api call for view
        const [data,setData] = useState([]);
        const [ename,setename] = useState("");
        const [eventDesc,setEventDesc] = useState("");
        const [Rules,setRules] = useState("");
        const [Venue,setVenue] = useState("");
        const [np,setnp] = useState("");
        const [eid,seteid] = useState("");
        useEffect(async()=>{
            
            let cr_name = localStorage.getItem("name");
            const config = {
                header:{
                  "Content-Type": "application/json"
                }
            }
           const name = {"coordinatorname": cr_name};
          
            let result = await axios.post("http://localhost:5000/api/event/cr",name,config);
            console.warn("res",result)
            setData(result)
            setename(result.data.eventname)
            console.warn("e",ename)
            seteid(result.data._id)
            setRules(result.data.rules);
            setEventDesc(result.data.eventdesc)
            setVenue(result.data.venue)
            setnp(result.data.noofparticipants)
            console.warn("eventname",result.data.eventname)
        },[])
        console.warn("result",data)
    
        // const handleUpdate = async(e) => {
        //     e.preventDefault();
        //   let newid = eid
        //   let newdesc = eventDesc
        //   let newrules = Rules
        //   //document.getElementById("newnoofparticipants").value=NoofParticipants
        //   try{
        //     const config = {
        //       header:{
        //         "Content-Type": "application/json"
        //       }
        //     }
        //     const event = { "id": newid, "eventdesc":newdesc,"rules":newrules};
        //     console.warn(event)
        //     const res = await axios.put("/api/event/update", event, config);
        //     console.log("updated!")
        //     if(res.status === 200){
            
        //         swal({
        //             title: "Done",
        //             text: "Event updated!",
        //             icon: "success",
        //             button: "OK",
        //           });
        //     }
          
        //   }
        //   catch(err){
        //    console.log(err.response.data);
        //    swal({
        //     title: "Error",
        //     text: "Error while updating",
        //     icon: "warning",
        //     button: "OK",
        //   });
        //   }
        // }
   //api call to get event details according to coordinator
   
//    const [cr_data,setCrData] = useState([]);
//    useEffect(async()=>{
//     console.warn(cr_name)
//          //console.warn(name)
//        let cr_result = await axios.get("/api/event/cr",name,configg);
//        console.warn(cr_result.data.data)
//        setCrData(cr_result)

//    },[])
//    console.warn("cr_data",cr_data.data)


//    useEffect(async()=>{
//       try{
//         const config = {
//           header:{
//             "Content-Type": "application9/json"
//           }
//         }
//         const cr = { "coordinatorname": cr_name};
//         const res = await axios.get("/api/event/cr", cr, config);
//         if(res.status === 200){
            
//          setCrData(res.data.data)
//         }
//     }
//     catch(err){
//      console.log(err.response.data);
//     }
//    },[])
//    console.warn("cr_result",cr_data)


  return (
<div className='sb-nav-fixed'>
  <div id='layoutSidenav'>
    <div id="layoutSidenav_content">
    <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Event details {ename}</h3></div>
                                    <div class="card-body">
                                        <form  method="post">
                                            <Fragment>
                                                <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="name" 
                                                        name='name' type="text" value={ename}
                                                        placeholder="Enter your first name" disabled />
                                                        <label for="name">Event Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="np" 
                                                        name='np' type="text" 
                                                        value={np} disabled
                                                        />
                                                        <label for="inputLastName">Number of participants</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" 
                                                value={eventDesc}  style={{height:"90px",textAlign:"center"}}
                                                name='email' type="text" placeholder='Event description' />
                                                <label for="email">Event description</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" 
                                                value={Rules}
                                                style={{height:"90px"}}
                                                name='rules' type="text" placeholder="Enter rules" />
                                                <label for="email">Rules</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="venue"
                                                        value={Venue} disabled
                                                         name='eventvenue' type="text" />
                                                        <label for="venue">Event Venue</label>
                                                    </div>
                                                </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><button class="btn btn-primary btn-block" type="submit" >Save changes</button></div>
                                            </div>
                                            </Fragment>
                                         
                                      
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
 </div>
 </div>
</div> 
  )
}

export default EventDetails_Coordinator