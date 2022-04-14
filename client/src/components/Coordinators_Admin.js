import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Coordinators_Admin() {
    //api call for viewing all users
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/users/all");
        setData(result.data.data)
    },[])
    console.warn("result",data)


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
        alert("Coordinator Added!")
         
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
                                            <option value="{dept_data.name}">{dept_data.name}</option>
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
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Department</th>
                                        <th>Event</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map((data)=>
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>--</td>
                                            <td>{data.department}</td>
                                            <td>--</td>
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

export default Coordinators_Admin