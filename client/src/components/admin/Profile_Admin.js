import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

function Profile_Admin() {
  //let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
        console.log(email+"hi")
    }
  const [data, setData] = useState([]);
  //const [data2, setData2] = useState([]);
  useEffect(async () => {
    
    const email = localStorage.getItem('email');
    const Email = {
      email,
    };
    console.warn(email);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(Email);
    let result = await axios.get("/api/profile/email?email="+email);
    setData(result.data.data)
    console.warn("result",data)

   // const res = await axios.get('/api/profile/email?email='+email, body, config);
   // let getdata = data.filter(row => (row.email === email ));
   // setData(res.data.data);
    //console.warn(res.data.data);
    // const res1 = await axios.get('api/tag');
    // setData2(res1.data.data);
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const User = {
        email,
        password,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(User);
      const res = await axios.post('api/auth', body, config);
      console.log(res.data);
      
    } catch (err) {
     // swal('Login failed!', 'Invalid Email ID/Password', 'error');
    }
  };

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
  )
}

export default Profile_Admin