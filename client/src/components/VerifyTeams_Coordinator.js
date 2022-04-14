import React,{useState,useEffect} from 'react'
import axios from 'axios';

function VerifyTeams_Coordinator() {
        //api call for viewing all users
        const [data,setData] = useState([]);
        useEffect(async()=>{
            let result = await axios.get("/api/register/all");
            setData(result.data.data)
        },[])
        console.warn("result",data)
    
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h3 className="mt-5">Verfy Registrations</h3>
                     <ol className="breadcrumb"></ol>
                    <hr/>
                    <div className="card mb-4">
                        <div className="card-header">
                           <h5>Registraton Details</h5>
                        </div>
                        <div className="card-body">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Department</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map((data)=>
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.department}</td>
                                            <td>
                                                <button type="submit" className="btn btn-outline-success btn-sm" style={{marginRight:'10px'}}>
                                                <i class="fas fa-check"></i>
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

export default VerifyTeams_Coordinator