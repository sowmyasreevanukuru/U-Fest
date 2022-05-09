import React,{useState,useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Departments_Admin() {
    let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
        console.log(email+"hi")
    }
     //api call for viewing all departments
    const [data,setData] = useState([]);
    const fetchData = () => {
      axios.get("/api/department/all").then((result) => {
        setData(result.data.data)
      });
    };
    useEffect(() => {
      fetchData();
    }, []); 
       
        
        // useEffect(async()=>{
        //     let result = await axios.get("/api/department/all");
        //     setData(result.data.data)
        // },[])
        // console.warn("result",data)
    
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
            swal({
                title: "Done",
                text: "New department added!",
                icon: "success",
                button: "OK",
              });
              fetchData();
            console.log(res)
          }catch(err){
            
            console.log(err.response.data);
            swal({
                title: "Invalid",
                text: "Department already exists!",
                icon: "warning",
                button: "OK",
              });
          }
        }
    const [show,setShow] = useState(false)
    const [Name,setName] = useState("");
    const [Id,setID] = useState("");
    
        
    function selectDept(name,id)
    {
       console.warn(name)
       setName(name)
       setID(id)
       console.warn(id)
    }
    const handleUpdate = async(e) => {
        e.preventDefault();
      let newid = Id
      let newname = Name
      try{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        const dept = { "id": newid, "name": newname };
        const res = await axios.put("/api/department/update", dept, config);
        console.log("updated!")
        if(res.status === 200){
        
            swal({
                title: "Done",
                text: "Department updated!",
                icon: "success",
                button: "OK",
              });
              setShow(false)
              fetchData();
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
                                    pattern="[A-Za-z ]{1,}"
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
                        <form onSubmit={e => handleUpdate(e)}
                        method="post">
                        <table>
                            <tr style={{borderSpacing:"0px 50px"}}>
                                <td>
                                    <input className="form-control" 
                                    id="newdeptname" 
                                    type="text" 
                                    name='name'
                                    placeholder="Enter Department name" 
                                    value={Name}
                                    onChange={(e) => onChange(setName(e.target.value))}
                                    pattern="[A-Za-z ]{1,}"
                                    required/>
                                    <input type="hidden" value={Id}/>
                                </td>
                                
                                <td>
                                    <button type="submit" className="btn btn-primary">
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
                                             <button type="button" id="edit" onClick={()=>{setShow(true);selectDept(data.name,data._id);}} className="btn btn-outline-success btn-sm"
                                                    style={{marginRight:'10px'}}>
                                                        <i class="fas fa-edit"></i>
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