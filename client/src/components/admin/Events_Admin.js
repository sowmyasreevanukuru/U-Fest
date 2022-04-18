import React,{useState,useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Events_Admin() {
    let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
        console.log(email+"hi")
    }
    //api call for viewing all event
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/event/all");
        setData(result.data.data)
    },[])
    console.warn("result",data)


   const [cr_data,setdept] = useState([]);
   useEffect(async()=>{
       let cr_result = await axios.get("/api/users/all");
       setdept(cr_result.data.data)
   },[])
   console.warn("cr_result",cr_data)
 
    const[formData,setFormData] = useState({
        eventname:"",
        coordinatorname:"",
        venue:"",
        noofparticipants:""
      });
      const {
        eventname,
        coordinatorname,
        venue,
        noofparticipants
      } = formData;
      const onChange = (e) =>
      setFormData({...formData, [e.target.name]:e.target.value});
  
    let save = async (e) => {
      e.preventDefault();
      const new_event = {
        eventname,
        coordinatorname,
        venue,
        noofparticipants
      };
      console.log(save);
      try{
        console.log(new_event);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(new_event);
        console.log(body);
        const res = await axios.post(
          "/api/event",
          body,
          config
        ); 
        //swal("Registered!", "Registered successfully!", "success");
        swal({
            title: "Done",
            text: "Coordinator added!",
            icon: "success",
            button: "OK",
          });
      }catch(err){
        console.log(err.response.data);
        swal({
            title: "Event already exists",
            text: "",
            icon: "warning",
            button: "OK",
          });
      }
    }
    const [show,setShow] = useState(false)
    const [EventName,setEventName] = useState("");
    const [Id,setID] = useState("");
    const [CoordinatorName,setCoordinatorName] = useState("");
    const [Venue,setVenue] = useState("");
    const [NoofParticipants,setNoofParticipants] = useState("");
    
        
    function selectEvent(id,eventname,coordinatorname,venue,noofparticipants)
    {
       console.warn(id,eventname,noofparticipants,coordinatorname,venue)
       setEventName(eventname)
       setCoordinatorName(CoordinatorName)
       setVenue(venue)
       setNoofParticipants(NoofParticipants)
       setID(id)
       //console.warn(id)
    }
    const handleUpdate = async(e) => {
        e.preventDefault();
      let newid = Id
      let neweventname = EventName
      let newcoordinatorname = CoordinatorName
      let newvenue = Venue
      let newnumber = NoofParticipants
      //document.getElementById("newnoofparticipants").value=NoofParticipants
      try{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        const event = { "id": newid, "eventname": neweventname,"coordinatorname" : newcoordinatorname,"venue":newvenue ,"noofparticipants":newnumber};
        console.warn(event)
        const res = await axios.put("/api/event/update", event, config);
        console.log("updated!")
        if(res.status === 200){
        
            swal({
                title: "Done",
                text: "Event updated!",
                icon: "success",
                button: "OK",
              });
        }
      
      }
      catch(err){
       console.log(err.response.data);
       swal({
        title: "Error",
        text: "Error while updating",
        icon: "warning",
        button: "OK",
      });
      }
    }
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h3 className="mt-5">Manage Events</h3>
                     <ol className="breadcrumb"></ol>
                    <hr/>
                <div className="card mb-4">
                    <div className="card-header">
                       <h5>Add event</h5>
                    </div>
                    <div className="card-body">
                    <form action="../../../../routes/api/event"
                    method="post" onSubmit={save}>
                    <table>
                        <tr style={{borderSpacing:"0px 50px"}}>
                            <td>
                                <input className="form-control" 
                                id="eventname" 
                                type="text" 
                                name='eventname'
                                placeholder="Enter Event name" 
                                value={eventname}
                                onChange={(e) => onChange(e)}
                                pattern="[A-Za-z ]{1,}"
                                required/>
                            </td>
                            <td>
                                <input className="form-control" 
                                id="venue" 
                                type="text" 
                                placeholder="Enter venue" 
                                name='venue' style={{width:"250px"}}
                                value={venue}
                                onChange={(e) => onChange(e)}
                                required/>
                                
                            </td>
                            <td>
                                <input className="form-control" 
                                id="noofparticipants" 
                                type="number" 
                                min={1} max={10}
                                placeholder="Number of participants"
                                name='noofparticipants' style={{width:"210px"}}
                                value={noofparticipants}
                                onChange={(e) => onChange(e)}
                                required/>
                            </td>
                            <td>
                                <select class="form-select" name="coordinatorname" id="coordinatorname" placeholder='Select Coordinator'
                                value={coordinatorname}
                                onChange={(e) => onChange(e)}
                                required>
                                    <option selected disabled value="">--Select Coordinator--</option>
                                    {
                                        cr_data.map((cr_data)=>
                                    
                                        <option key="{cr_data.name}">{cr_data.name}</option>
                                        
                                        )
                                    }
                                </select>
                            </td>
                            
                            <td>
                                <button type="submit" className="btn btn-primary">
                                <i class="fas fa-plus" style={{marginRight:'10px'}}></i>
                                    Add Event
                                </button>
                            </td>
                        </tr>
                    </table>
                    </form>
                    </div>
                </div>
                { show?
                    <div className="card mb-4">
                        <div className="card-header">
                           <h5>Update event</h5>
                        </div>
                        <div className="card-body">
                        <form onSubmit={e => handleUpdate(e)}
                        method="post">
                        <table>
                         <tr style={{borderSpacing:"0px 50px"}}>
                            <td>
                            <input type="hidden" value={Id}/>
                                <input className="form-control" 
                                id="eventname" 
                                type="text" 
                                name='eventname'
                                placeholder="Enter Event name" 
                                value={EventName}
                                onChange={(e) => onChange(setEventName(e.target.value))}
                                pattern="[A-Za-z ]{1,}"
                                required/>
                            </td>
                            <td>
                                <input className="form-control" 
                                id="venue" 
                                type="text" 
                                placeholder="Enter venue" 
                                name='venue' style={{width:"250px"}}
                                onChange={(e) => onChange(setVenue(e.target.value))}
                                value={Venue}
                                required/>
                                
                            </td>
                            <td>
                                <input className="form-control" 
                                id="newnoofparticipants" 
                                type="text"
                                placeholder="Number of participants"
                                name='newnoofparticipants' style={{width:"210px"}}
                                onChange={(e) => onChange(setNoofParticipants(e.target.value))}
                                value={NoofParticipants}
                                required/>
                            </td>
                            <td>
                                <select class="form-select" name="coordinatorname" id="coordinatorname" placeholder='Select Coordinator'
                                value={CoordinatorName}
                                onChange={(e) => onChange(setCoordinatorName(e.target.value))}
                                required>
                                    <option selected disabled value="">--Select Coordinator--</option>
                                    {   
                                        cr_data.map((cr_data)=>
                                    
                                        <option key="{cr_data.name}">{cr_data.name}</option>
                                        
                                        )
                                    }
                                </select>
                            </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">
                                    <i class="fas fa-plus" style={{marginRight:'10px'}}></i>
                                        Update event
                                    </button>
                                </td>
                            </tr>
                        </table>
                        </form>
                        </div>
                    </div>
                    :null
                    }
                <div className="card mb-4">
                <div className="card-header">
                   <h5>Event Details</h5>
                </div>
                <div className="card-body">
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Coordinator</th>
                                <th>Event rules</th>
                                <th>Venue</th>
                                <th>No of participants</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((data)=>
                                <tr key={data.id}>
                                    <td>{data.eventname}</td>
                                    <td>{data.coordinatorname}</td>
                                    <td>{data.rules}</td>
                                    <td>{data.venue}</td>
                                    <td style={{textAlign:"center"}}>{data.noofparticipants}</td>
                                    <td>
                                        <button type="submit" className="btn btn-outline-success btn-sm" onClick={()=>{setShow(true);selectEvent(data._id,data.eventname,data.coordinatorname,data.venue,data.noofparticipants);}} style={{marginRight:'10px'}}>
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="submit" className="btn btn-outline-danger btn-sm">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
            </main>
        </div>
    </div>
</div>  
  )
}

export default Events_Admin