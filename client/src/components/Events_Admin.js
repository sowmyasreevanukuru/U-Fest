import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Events_Admin() {
    //api call for viewing all users
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
        alert("New Event added!")
         
      }catch(err){
        console.log(err.response.data);
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
                                required/>
                            </td>
                            <td>
                                <input className="form-control" 
                                id="venue" 
                                type="text" 
                                placeholder="Enter venue" 
                                name='venue'
                                value={venue}
                                onChange={(e) => onChange(e)}
                                required/>
                                
                            </td>
                            <td>
                                <input className="form-control" 
                                id="noofparticipants" 
                                type="number" 
                                min={1} max={10}
                                placeholder="Enter no ofparticipants"
                                name='noofparticipants'
                                value={noofparticipants}
                                onChange={(e) => onChange(e)}
                                required/>
                            </td>
                            <td>
                                <select class="form-select" name="coordinatorname" id="coordinatorname" placeholder='Select Coordinator'
                                value={coordinatorname}
                                onChange={(e) => onChange(e)}
                                required>
                                    <option selected disabled value="">--select Coordinator--</option>
                                    {
                                        cr_data.map((cr_data)=>
                                        <option value="{cr_data.name}">{cr_data.name}</option>
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
                                <th>Coordinator email</th>
                                <th>Coordinator contact</th>
                                <th>Department</th>
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
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>{data.venue}</td>
                                    <td>{data.noofparticipants}</td>
                                    <td>
                                        <button type="submit" className="btn btn-outline-success btn-sm" style={{marginRight:'10px'}}>
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="submit" className="btn btn-outline-danger btn-sm">
                                            <i class="fas fa-user-times"></i>
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