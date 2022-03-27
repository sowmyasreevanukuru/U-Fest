import React from 'react'

import { Fragment, useState } from 'react'

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    enro:'',
    conatct:''
  });
  const {name,email,enro,conatct} = formData;
  const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit = e => {
    e.preventDefault();
  }
  return (
    <Fragment>
    <div className="container">
    <br></br><br></br>
    <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Register here</h3></div>
                <div className="card-body">
                      <form className='form' onSubmit={e=> onSubmit(e)}>
                      <table>
                        <tr>
                          <td>
                            <div className="form-floating mb-3">
                              <select class="form-select" name="event" id="event" required="" placeholder='Select Event Type'>
                                <option selected disabled value="">--select event--</option>
                                <option value="Dance">Dance</option>
                                <option value="Singing">Singing</option>
                              </select>
                            </div>        
                          </td>
                          <td>
                            <div className="form-floating mb-3">
                              <select class="form-select" name="department" id="department" required="">
                                <option selected disabled value="">--select department--</option>
                                <option value="Bmiit">BMIIT</option>
                                <option value="Cgpit">CGPIT</option>
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
                            <div className="form-floating mb-3">
                              <input className="form-control" 
                              id="name" 
                              type="text" 
                              name='name'
                              placeholder="Enter full name" 
                              value={name}
                              onChange ={e=>onChange(e)}
                              required
                              />
                              <label for="name">Full Name</label>
                            </div>
                          </td>
                          <td>
                            <div className="form-floating mb-3">
                              <input className="form-control" id="email" type="email" placeholder="Enter email" />
                              <label for="email">Email</label>
                            </div>
                          </td>
                          <td>
                              <div className="form-floating mb-3">
                                <input className="form-control" id="enro" type="text" placeholder="Enter enrollement" />
                                <label for="enro">Enrollment</label>
                              </div>
                          </td>
                          <td>
                            <div className="form-floating mb-3">
                              <input className="form-control" id="contact" type="text" placeholder="Enter contact" />
                              <label for="contact">Contact</label>
                            </div>
                          </td>
                        </tr>
                      </table>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                              <a className="btn btn-primary" >Register</a>
                          </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
</Fragment>
  )
}
export default Register