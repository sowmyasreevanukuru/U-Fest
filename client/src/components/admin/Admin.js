import React,{useState,useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom'

function Admin(props) {
    let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    
    }
    //api call for viewing all departments
    const [data,setData] = useState([]);
    const [countdept,setcountdept] = useState([]);
    useEffect(async()=>{
        let result = await axios.get("/api/department/all");
        setData(result.data.data)
        setcountdept(Object.keys(result.data.data).length);
       // let countdept = Object.keys(result.data.data).length;
        console.log(Object.keys(result.data.data).length)
    },[])
    console.warn("result",data)
    console.warn("countd",countdept)

     //api call for viewing all event
     const [countevent,setcountevent] = useState([]);
     useEffect(async()=>{
         let result = await axios.get("/api/event/all");
         setData(result.data.data)
         setcountevent(Object.keys(result.data.data).length);
     },[])
     console.warn("counte",countevent)
   
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
    <div id="layoutSidenav_content">
    <main>
        <div className="container-fluid">
            <h1 className="mt-5">Dashboard</h1>
            <ol className="breadcrumb"></ol>
            <hr/>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Number of Departments</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div className='small text-white'>{countdept}</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Number of Events</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div className='small text-white'>{countevent}</div>
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

export default Admin