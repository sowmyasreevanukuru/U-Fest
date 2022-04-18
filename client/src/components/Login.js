import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-bootstrap';

function Login() {
 // let email = localStorage.getItem("email");
    if(localStorage.getItem("email") !== null)
    {
        window.history.back();
    }
    // useEffect(()=>{
    //   if(localStorage.getItem('email')){
    //     window.history.back();
    //   }
    // })
    const[formData,setFormData] = useState({
        email: "",
        password: ""
      });
      const {
        email,
        password
      } = formData;
    
      const onChange = (e) =>
        setFormData({...formData, [e.target.name]:e.target.value});
    
      let save = async (e) => {
        e.preventDefault();
        const newuser = {
          email,
          password
        };
        console.log(save);
        try{
          
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = JSON.stringify(newuser);
          console.log(body);
          const res = await axios.post(
            "api/auth",
            body,
            config
          );
          console.log(res.data.user.name);
          localStorage.setItem("email",email);
          localStorage.setItem("password",password);
          localStorage.setItem("name",res.data.user.name);
          localStorage.setItem("dept",res.data.user.department);    
          
          if(res.status === 200) {
            
            if(res.data.user.role==="C")
            {
              if(res.data.user.status === "Active"){
              window.location.href="./Coordinator";
              }
              if(res.data.user.status === "Inactive"){
                swal({
                  title: "Invalid",
                  text: "Access denied",
                  icon: "warning",
                  button: "OK",
                });
              }
            }
            else if(res.data.user.role==="A")
            {
              window.location.href="./Admin";
            }
            else
            {
              window.location.href="./Error_404";
            }
           
          }
    
          console.log(res);
          //swal("Registered!", "Registered successfully!", "success");
          //admin- sowmyasreevanukuru@gmail,com password -sowmya123
          //coordinator - 
        
        }catch(err){
          console.log(err.response.data);
         // alert("Invalid credentials")
         swal({
          title: "Invalid",
          text: "Invalid Credentials",
          icon: "warning",
          button: "OK",
        });
        }
      }
  return (
    <div>
    <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Welcome</h1>
            <h5 className="lead text-center">Enter Your Credentials To Login</h5>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form action="../../../../routes/api/auth" 
                  method='post'
                  onSubmit={save}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
                <NavLink to="/">Forgot password</NavLink>
                
              
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login