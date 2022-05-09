import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import e from 'cors';


function Profile_Admin() {
  //let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
        //console.log(email+"hi")
    }
    
    let id = localStorage.getItem("_id");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let name = localStorage.getItem("name");
    let dept = localStorage.getItem("dept");
   // console.log("tre",useremail,username,userdept,userpassword);
  
   const [Name,setName] = useState("");
   const [Email,setEmail] = useState("");
   const [Password,setPassword] = useState("");
   
    let save = async (e) => {
        e.preventDefault();
    
        const updatenames = {
          id,
          name,
          email,
          password
        };
    
        try {
          console.log(updatenames);
          const config = {
            headers: {
              "Content-Type": "application/json",
             },
          };
          const body = JSON.stringify(updatenames);
          console.log(body);
          const res = await axios.patch(
            "/api/auth/saveprofile",
            body,
            config
          );
          if (res.status === 200) {
            swal({
                            title: "Done",
                            text: "Profile updated!",
                            icon: "success",
                            button: "OK",
                          });
          } else {
            swal({
                            title: "Access denied",
                            icon: "Error while updating",
                            button: "OK",
                          });
          }
        } catch (err) {
          console.error(err.response.data);
        }
      };


//   const fetchData = () => {
    
//     const config = {
//       headers: {
//         "x-auth-token": localStorage.getItem("token"),
//       },
//     };
//     const user = {
//         email,
//         password
//     }
//     const body = JSON.stringify(user);

//     axios.get("/api/auth",body,config).then((res) => {
//       setID(res.data.user.id);
//       setName(res.data.user.name);
//       setID(res.data.user.id);
//       setPassword(res.data.user.name);
//       setEmail(res.data.user.email);
//       console.log(res.data.user)
//     });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   let save = async (e) => {
//     e.preventDefault();

//     const updatenames = {
//       id,
//       name,
//       email,
//       password
//     };

//     try {
//       console.log(updatenames);
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const body = JSON.stringify(updatenames);
//       console.log(body);
//       const res = await axios.patch(
//         "/api/saveprofile",
//         body,
//         config
//       );
//       if (res.status === 200) {
//         swal({
//             title: "Done",
//             text: "Profile updated!",
//             icon: "success",
//             button: "OK",
//           });
        
//       } else {
//         swal({
//             title: "Access denied",
//             icon: "Error while updating",
//             button: "OK",
//           });
//       }
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };
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
                                        <form
                                        action="../../../../routes/api/auth"
                                        method="post"
                                        className="signup-form"
                                        onSubmit={save}>                                 
                                            <Fragment>
                                            <input type="hidden" name="id" id="id" value={id}/>
                                                <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="name" 
                                                        name='name' type="text" 
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="Enter your first name" />
                                                        <label for="name">Full Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="department" 
                                                        name='department' type="text" 
                                                        value={dept}
                                                        placeholder="Enter department name" disabled/>
                                                        <label for="inputLastName">Department</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" 
                                                value={email}                                               
                                                onChange={(e) => setEmail(e.target.value)}
                                                name='email' type="email" placeholder="name@example.com" />
                                                <label for="email">Email address</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
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
                                                <div class="d-grid"><a class="btn btn-primary btn-block">Save changes</a></div>
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

export default Profile_Admin