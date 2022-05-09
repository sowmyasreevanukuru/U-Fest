import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

function Profile_Coodinator() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let name = localStorage.getItem("name");
    let dept = localStorage.getItem("dept");
    
    // console.warn(email);
    // console.warn(password);
    // console.warn(name);
    
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    }
    // useEffect( async () => {
        
    //     const newuser = {
    //       email
    //     };
        
    //     try{
    //       const config = {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       };
    //       const body = JSON.stringify(newuser);
    //       console.log(body);
    //       const res = await axios.get(

    //         "http://localhost:5000/api/auth",
    //         body,
    //         config
    //       );
    //       if(res.status === 200) {
    //         console.warn(res.data.data);
    //       }
    //       console.log(res);
    //     }catch(err){
    //       console.log(err.response.data);
    //     }
    // },[])
    // //   //api call for viewing all users
    //     const [data,setData] = useState([]);
    //     const config = {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       };
    //      // let password = "neshi123";
    //       const u = {
    //         email,
    //       };
    //     console.warn(email)
    //     const body = JSON.stringify(u);
    //     console.log(body)
    //     useEffect(async()=>{
    //         let result = await axios.get("/api/auth",body,config);
    //         console.log(result)
    //         setData(result.data.data)
    //     },[])
    //     console.warn("result",data)
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
        <div id="layoutSidenav_content">
        <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Your Account</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <Fragment>
                                                <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="name" 
                                                        name='name' type="text" value={name}
                                                        placeholder="Enter your first name" />
                                                        <label for="name">Full Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="department" 
                                                        name='department' type="text" 
                                                        value={dept}
                                                        placeholder="Enter department name"/>
                                                        <label for="inputLastName">Department</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" 
                                                value={email}
                                                name='email' type="email" placeholder="name@example.com" />
                                                <label for="email">Email address</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password"
                                                        value={password}
                                                         name='password' type="password" placeholder="Create a password" />
                                                        <label for="password">Password</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="role" type="text" name='role' disabled value="Coordinator" />
                                                        <label for="role">Role</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><button class="btn btn-primary btn-block" type="submit" >Save changes</button></div>
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
  )
}

export default Profile_Coodinator