import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-bootstrap';

function ResetPassword() {
    if(localStorage.getItem("email") !== null)
    {
        window.history.back();
    }
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const token = queryParams.get("token");
    console.warn(id,token)
    const[formData,setFormData] = useState({
        password: ""
      });
      const {
        password
      } = formData;
    
      const onChange = (e) =>
        setFormData({...formData, [e.target.name]:e.target.value});
    
      let save = async (e) => {
        e.preventDefault();
        const newpassword = {
          password
        };
        console.log(save);
        try{
          
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = JSON.stringify(newpassword);
          console.log(body);
          const res = await axios.post(
            "http://localhost:5000/api/password-reset/" + id + "/" + token,body,config
          );
          if(res.status === 200) {
             swal({
                  title: "Done",
                  text: "Password reset successfully!",
                  icon: "success",
                  button: "OK",
                });
                window.location.href="/Login";
          }
         console.log(res);
        }catch(err){
          console.log(err.response.data);
         // alert("Invalid credentials")
         swal({
          title: "Invalid",
          text:  "Error while reset password",
          icon:  "warning",
          button: "OK",
        });
        }
      }
  return (
    <div style={{marginTop:"120px"}}>
    <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h3 className="display-4 fw-bolder">Reset Password</h3>
            <h5 className="lead text-center">Enter new password </h5>
          </div>
          <div className="col-md-6 p-5">
            <form action="../../../../routes/api/passwordReset//:userId/:token" 
            method='post'
            onSubmit={save}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="password"
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onChange={(e) => onChange(e)}
                  required
                />
                
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                RESET PASSWORD
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ResetPassword