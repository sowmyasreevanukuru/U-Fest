import React, { useState } from 'react'
import axios from 'axios';

function Login() {
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
          
          if(res.status === 200) {
            
            console.log(localStorage.getItem("email"));
            if(res.data.user.role==="C")
            {
              window.location.href="./Coordinator";
            }
            else if(res.data.user.role==="A")
            {
              
              localStorage.setItem("email",email);
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
          alert("Invalid credentials")
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
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
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