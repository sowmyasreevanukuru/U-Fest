import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Register() {
   //to get all departments
   const [dept_data,setdept] = useState([]);
   useEffect(async()=>{
       let dept_result = await axios.get("/api/department/all");
       setdept(dept_result.data.data)
   },[])
   console.warn("dept_result",dept_data)

  //to get all departments
   const [event_data,setevent] = useState([]);
   useEffect(async()=>{
       let event_result = await axios.get("/api/event/all");
       setevent(event_result.data.data)
   },[])
   console.warn("event_result",event_data)


    const[formData,setFormData] = useState({
        name: "",
        enro: "",
        email: "",
        department: "",
        eventname:"",
        contact: ""
      });
      const {
        name,
        enro,
        email,
        department,
        eventname,
        contact
      } = formData;
    
      const onChange = (e) =>
        setFormData({...formData, [e.target.name]:e.target.value});
    
      let save = async (e) => {
        e.preventDefault();
        const newReg = {
          name,
          enro,
          email,
          department,
          eventname,
          contact
        };
        console.log(save);
        try{
          console.log(newReg);
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = JSON.stringify(newReg);
          console.log(body);
          const res = await axios.post(
            "api/register",
            body,
            config
          ); 
          //swal("Registered!", "Registered successfully!", "success");
          alert("Registerd successfully!");
        }catch(err){
          console.log(err.response.data);
        }
      }
  return (
    <div>
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-4 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">Register Here!</h1>
                    <p className="lead text-center">Enter Your Details to Register</p>
                </div>
            <div className="col-md-8 p-5">
            <form action="../../../../routes/api/register"
              method="post" onSubmit={save}>
                <table>
                    <tr>
                        <td>
                            <div className='mb-4'>
                            <select class="form-select" name="eventname" id="eventname" placeholder='Select event'
                                    value={eventname}
                                    onChange={(e) => onChange(e)}
                                    required>
                                        <option selected disabled value="">--select eventname--</option>
                                        {
                                            event_data.map((event_data)=>
                                            <option key="{event_data.eventname}">{event_data.eventname}</option>
                                            )
                                        }
                                    </select>
                            </div>
                        </td>
                        <td>
                        
                            <div className='mb-4'>
                            <select class="form-select" name="department" id="department" placeholder='Select department'
                                    value={department}
                                    onChange={(e) => onChange(e)}
                                    
                                    required>
                                        <option selected disabled value="">--select department--</option>
                                        {
                                            dept_data.map((dept_data)=>
                                            <option key="{dept_data.name}">{dept_data.name}</option>
                                            )
                                        }
                                    </select>
                            </div>
                        </td>
                    </tr>
                        <tr>
                          <td>
                          <div className="form-floating mb-3"><p>Enter student details</p></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="name" 
                              type="text" 
                              name='name'
                              placeholder="Enter full name" 
                              value={name}
                              onChange = {(e) => onChange(e)}
                              pattern="[A-Za-z ]{1,}"
                              required/>
                              <label for="name">Full Name</label>
                            </div>
                          </td>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="email" 
                              type="email" 
                              placeholder="Enter email" 
                              name='email'
                              value={email}
                              onChange={(e) => onChange(e)}
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                              required/>
                              <label for="email">Email</label>
                            </div>
                          </td>
                          <td>
                              <div className="form-floating mb-1">
                                <input className="form-control" 
                                id="enro" 
                                type="text" 
                                placeholder="Enter enrollment"
                                value={enro}
                                name = "enro"
                                onChange={(e) => onChange(e)}
                                pattern="^[0-9]{15,15}$"
                                required/>
                                <label for="enro">Enrollment</label>
                              </div>
                          </td>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="contact" type="text" 
                              placeholder="Enter contact" 
                              name='contact'
                              value={contact}
                              pattern="[6789][0-9]{9}"
                              onChange={(e) => onChange(e)} required
                              />
                              <label for="contact">Contact</label>
                            </div>
                          </td>
                        </tr>
                </table>            
                <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                  Register
                </button>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register