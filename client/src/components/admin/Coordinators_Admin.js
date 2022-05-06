import React,{useState,useEffect,Component} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { render } from 'react-dom';

function Coordinators_Admin() {
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    }
    //let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    }
    
    //api call for viewing all users
    const [data,setData] = useState([]);
    const [data2,setData2] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/users/all");
        setData2(delete(result.data.data[0]))
        console.warn("newdata",data2)
        setData(result.data.data)

    },[])
    console.warn("result",data)

    //to get all departments
   const [dept_data,setdept] = useState([]);
   useEffect(async()=>{
       let dept_result = await axios.get("/api/department/all");
       
       setdept(dept_result.data.data)
   },[])
   console.warn("dept_result",dept_data)

    const[formData,setFormData] = useState({
        name: "",
        email: "",
        password:"",
        department: ""
      });
      const {
        name,
        email,
        password,
        department,
      } = formData;
      const onChange = (e) =>
      setFormData({...formData, [e.target.name]:e.target.value});
  
    let save = async (e) => {
      e.preventDefault();
      const new_coordinator = {
        name,
        email,
        password,
        department
      };
      console.log(save);
      try{
        console.log(new_coordinator);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(new_coordinator);
        console.log(body);
        const res = await axios.post(
          "/api/users",
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
            title: "User already exists",
            text: "",
            icon: "warning",
            button: "OK",
          });
      }
    }
    const [status,setStatus] = useState("");
    const [Id,setID] = useState("");
   
    function selectuser(id,status)
    {
       console.warn(id,status)
       setStatus(status)
       setID(id)
    }
    const handleUpdate = async(e) => {
        e.preventDefault();
      let newid = Id
      let newstatus 
      if(status === "Active")
      {
          newstatus = "Inactive";
      }
      else
      {
          newstatus = "Active"
      }
      console.warn(status);
      try{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        const user = { "id": newid, "status": newstatus };
        const res = await axios.put("/api/auth/update", user, config);
        console.log("updated!")
        if(res.status === 200){
        
            // swal({
            //     title: "Done",
            //     text: "Status updated!",
            //     icon: "success",
            //     button: "OK",
            //   });
            swal({
                title: "Are you sure?",
                text: "Are you sure to change status this user?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Status updated!", {
                    icon: "success",
                  });
                }
              });
            this.render()
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
                    <h3 className="mt-5">Manage Coordinators</h3>
                     <ol className="breadcrumb"></ol>
                    <hr/>

                    <div className="card mb-4">
                        <div className="card-header">
                           <h5>Add Coordinator</h5>
                        </div>
                        <div className="card-body">
                        <form action="../../../../routes/api/users"
                        method="post" onSubmit={save}>
                        <table>
                            <tr style={{borderSpacing:"0px 50px"}}>
                                <td>
                                    <input className="form-control" 
                                    id="name" 
                                    type="text" 
                                    name='name'
                                    placeholder="Enter Cordinator name" 
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                    pattern="[A-Za-z ]{1,32}"
                                    required/>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    name='email'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                                    required/>
                                    
                                </td>
                                <td>
                                    <input className="form-control" 
                                    id="password" 
                                    type="password" 
                                    placeholder="Enter default password"
                                    name='password'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    required/>
                                </td>
                                <td>
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
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">
                                    <i class="fas fa-plus" style={{marginRight:'10px'}}></i>
                                        Add Coordinator
                                    </button>
                                </td>
                            </tr>
                        </table>
                        </form>
                        </div>
                    </div>
                    
                    <div className="card mb-4">
                        <div className="card-header">
                           <h5>Coordinator Details</h5>
                        </div>
                        <div className="card-body">
                        <form onSubmit={e => handleUpdate(e)}
                        method="post">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Department</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map((data)=>
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.department}</td>
                                            <td>{data.status}</td>
                                            <td>
                                            
                                                <button type="submit" className="btn btn-outline-success btn-sm" onClick={()=>{selectuser(data._id,data.status);}}  style={{marginRight:'10px'}}>
                                                    <i class="fas fa-user-edit"></i>
                                                </button>
                                            
                                            </td>
                                        </tr>
                                    )
                                }    
                                </tbody>
                            </table>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>    
  )
}

export default Coordinators_Admin

