import React,{useState,useEffect} from 'react'
import axios from 'axios';

function EventDetails_Coordinator() {
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

        //api call for viewing all users
        const [data2,setData2] = useState([]);
        useEffect(async()=>{
            let result2 = await axios.get("/api/users/all");
            setData2(result2.data.data)
        },[])
        console.warn("result2",data2)
    
   const [cr_data,setdept] = useState([]);
   useEffect(async()=>{
       let cr_result = await axios.get("/api/users/all");
       setdept(cr_result.data.data)
   },[])
   console.warn("cr_result",cr_data)


  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid">
                    <h3 className="mt-5">Event details</h3>
                     <ol className="breadcrumb"></ol>
                    <hr/>
                    
                    <div className='sb-nav-fixed'>
                    <div id='layoutSidenav'>
                        <div id="layoutSidenav_content">
                        <main>
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-7">
                                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                    <div class="card-body">
                                                        <form onSubmit={(e) => onSubmit(e)}>
                                                        
                                                            <Fragment>
                                                                <div class="row mb-3">
                                                                <div class="col-md-6">
                                                                    <div class="form-floating mb-3 mb-md-0">
                                                                        <input class="form-control" id="name" 
                                                                        name='name' type="text" 
                                                                        value="Sowmyasree Vanukuru"
                                                                        onChange={(e) => onChange(e)}
                                                                        placeholder="Enter your first name" />
                                                                        <label for="name">Full Name</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-floating">
                                                                        <input class="form-control" id="department" 
                                                                        name='department' type="text" 
                                                                        value="CGPIT"
                                                                        onChange={(e) => onChange(e)}
                                                                        placeholder="Enter department name" disabled/>
                                                                        <label for="inputLastName">Department</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-floating mb-3">
                                                                <input class="form-control" id="email" 
                                                                value="vanukurusowmya12@gmail.com"
                                                                onChange={(e) => onChange(e)}
                                                                name='email' type="email" placeholder="name@example.com" />
                                                                <label for="email">Email address</label>
                                                            </div>
                                                            <div class="row mb-3">
                                                                <div class="col-md-6">
                                                                    <div class="form-floating mb-3 mb-md-0">
                                                                        <input class="form-control" id="password"
                                                                        value="sowmya123"
                                                                        onChange={(e) => onChange(e)}
                                                                         name='password' type="password" placeholder="Create a password" />
                                                                        <label for="password">Password</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-floating mb-3 mb-md-0">
                                                                        <input class="form-control" id="role" type="text" name='role' disabled value="ADMIN" />
                                                                        <label for="role">Role</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mt-4 mb-0">
                                                                <div class="d-grid"><a class="btn btn-primary btn-block" href="login.html">Save changes</a></div>
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
                </div>
            </main>
        </div>
    </div>
</div> 
  )
}

export default EventDetails_Coordinator