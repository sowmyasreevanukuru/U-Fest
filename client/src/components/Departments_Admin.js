import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Departments_Admin() {
        //api call for viewing all departments
        const [data,setData] = useState([]);
        const [Name,setName] = useState("");
        useEffect(async()=>{
            let result = await axios.get("/api/department/all");
            setData(result.data.data)
        },[])
        console.warn("result",data)
    
        const[formData,setFormData] = useState({
            name: ""
          });
          const {
            name
          } = formData;
          const onChange = (e) =>
          setFormData({...formData, [e.target.name]:e.target.value});
      
        let save = async (e) => {
          e.preventDefault();
          const new_dept = {
            name
          };
          console.log(save);
          try{
            console.log(new_dept);
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const body = JSON.stringify(new_dept);
            console.log(body);
            const res = await axios.post(
              "/api/department",
              body,
              config
            ); 
            //swal("Registered!", "Registered successfully!", "success");
            if(res.status === 200)
            {
                alert("Department Added!")
            }
            else{
                
                alert("Department already exists")
            }
            console.log(res)
          }catch(err){
            console.log(err.response.data);
          }
        }
    const [show,setShow] = useState(false)
    function selectDept(name)
    {
        console.warn(name)
        console.warn("hi")
       // setName(data[id].name)
       setName(name)
    }
    function updateDept()
    {
        let item={name}
        console.warn("item",item)
    }
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h3 className="mt-5">Manage Departments</h3>
                     <ol className="breadcrumb"></ol>
                    <hr/>

                    <div className="card mb-4">
                        <div className="card-header">
                           <h5>Add Department</h5>
                        </div>
                        <div className="card-body">
                        <form action="../../../../routes/api/department"
                        method="post" onSubmit={save}>
                        <table>
                            <tr style={{borderSpacing:"0px 50px"}}>
                                <td>
                                    <input className="form-control" 
                                    id="name" 
                                    type="text" 
                                    name='name'
                                    placeholder="Enter Department name" 
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                    required/>
                                </td>
                                
                                <td>
                                    <button type="submit" className="btn btn-primary">
                                    <i class="fas fa-plus" style={{marginRight:'10px'}}></i>
                                        Add Department
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
                           <h5>Update Department</h5>
                        </div>
                        <div className="card-body">
                        <form 
                        method="post" >
                        <table>
                            <tr style={{borderSpacing:"0px 50px"}}>
                                <td>
                                    <input className="form-control" 
                                    id="name" 
                                    type="text" 
                                    name='name'
                                    placeholder="Enter Department name" 
                                    value={Name}
                                    onChange={(e) => onChange(setName(e.target.value))}
                                    required/>
                                </td>
                                
                                <td>
                                    <button type="submit" className="btn btn-primary" onClick={updateDept}>
                                    <i class="fas fa-plus" style={{marginRight:'10px'}}></i>
                                        Update Department
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
                           <h5>Departments</h5>
                        </div>
                        <div className="card-body">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map((data)=>
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>
                                             <button type="button" id="edit" onClick={()=>{setShow(true);selectDept(data.name)}} className="btn btn-outline-success btn-sm"
                                                    style={{marginRight:'10px'}}>
                                                        <i class="fas fa-edit"></i>
                                                </button>
                                                <button type="submit" className="btn btn-outline-danger btn-sm">
                                                    <i class="fas fa-times"></i>
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

export default Departments_Admin