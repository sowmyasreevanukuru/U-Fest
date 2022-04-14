import React, { useState } from 'react'
import axios from 'axios';

function Register() {
    const[formData,setFormData] = useState({
        name: "",
        enro: "",
        email: "",
        department: "",
        contact: ""
      });
      const {
        name,
        enro,
        email,
        department,
        contact
      } = formData;
    
      const onChange = (e) =>
        setFormData({...formData, [e.target.name]:e.target.value});
    
      let save = async (e) => {
        e.preventDefault();
        const newReg = {
          name,
          enro,
          email,
          department,
          contact
        };
        console.log(save);
        try{
          console.log(newReg);
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = JSON.stringify(newReg);
          console.log(body);
          const res = await axios.post(
            "api/register",
            body,
            config
          ); 
          //swal("Registered!", "Registered successfully!", "success");
          alert("Registerd successfully!");
        }catch(err){
          console.log(err.response.data);
        }
      }
  return (
    <div>
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-4 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">Register Here!</h1>
                    <p className="lead text-center">Enter Your Details to Register</p>
                </div>
            <div className="col-md-8 p-5">
            <form action="../../../../routes/api/register"
              method="post" onSubmit={save}>
                <table>
                    <tr>
                        <td>
                            <div className='mb-4'>
                            <select class="form-select" name="department" value={department} id="event"  placeholder='Select department'
                            onChange={(e) => onChange(e)} required>
                                <option selected disabled value="">--select department--</option>
                                <option value="BMIIT">BMIIT</option>
                                <option value="CGPIT">CGPIT</option>
                              </select>
                            </div>
                        </td>
                    </tr>
                        <tr>
                          <td>
                          <div className="form-floating mb-3"><p>Enter student details</p></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="name" 
                              type="text" 
                              name='name'
                              placeholder="Enter full name" 
                              value={name}
                              onChange = {(e) => onChange(e)}
                              required/>
                              <label for="name">Full Name</label>
                            </div>
                          </td>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="email" 
                              type="email" 
                              placeholder="Enter email" 
                              name='email'
                              value={email}
                              onChange={(e) => onChange(e)}
                              required/>
                              <label for="email">Email</label>
                            </div>
                          </td>
                          <td>
                              <div className="form-floating mb-1">
                                <input className="form-control" 
                                id="enro" 
                                type="text" 
                                placeholder="Enter enrollment"
                                value={enro}
                                name = "enro"
                                onChange={(e) => onChange(e)}
                                required/>
                                <label for="enro">Enrollment</label>
                              </div>
                          </td>
                          <td>
                            <div className="form-floating mb-1">
                              <input className="form-control" 
                              id="contact" type="text" 
                              placeholder="Enter contact" 
                              name='contact'
                              value={contact}
                              onChange={(e) => onChange(e)} required
                              />
                              <label for="contact">Contact</label>
                            </div>
                          </td>
                        </tr>
                </table>            
                <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                  Register
                </button>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register