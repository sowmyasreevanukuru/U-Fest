import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-bootstrap';

function ForgotPassword() {

    if(localStorage.getItem("email") !== null)
    {
        window.history.back();
    }
    const showLoading = function() {
      swal({
        title: 'Sending mail',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        onOpen: () => {
          swal.showLoading();
        }
      }).then(
        () => {},
        (dismiss) => {
          if (dismiss === 'timer') {
            console.log('closed by timer!!!!');
            swal({ 
              title: 'Mail sent!',
              type: 'success',
              timer: 2000,
              showConfirmButton: false
            })
          }
        }
      )
    };
    const[formData,setFormData] = useState({
        email: ""
      });
      const {
        email
      } = formData;
    
      const onChange = (e) =>
        setFormData({...formData, [e.target.name]:e.target.value});
    
      let save = async (e) => {
        e.preventDefault();
        const newuser = {
          email
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
            "api/password-reset",
            body,
            config
          );
         // console.log(res.data.user.name);
          
          if(res.status === 200) {
            
             swal({
                  title: "Sent",
                  text: "Link sent to your mail to reset password",
                  icon: "success",
                  button: "OK",
                });
            
           
          }
         console.log(res);
        }catch(err){
          let error = err.response.data
          console.log(err.response.data);
         // alert("Invalid credentials")
         swal({
          title: "Invalid",
          text:  error,
          icon: "warning",
          button: "OK",
        });
        }
      }
  return (
    <div style={{marginTop:"120px"}}>
    <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h3 className="display-4 fw-bolder">Forgot Password?</h3>
            <h5 className="lead text-center">Enter your email to reset password</h5>
          </div>
          <div className="col-md-6 p-5">
            <form action="../../../../routes/api/passwordReset" 
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
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                GET MAIL
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ForgotPassword