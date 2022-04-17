import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

function Profile_Coodinator() {
  //let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
    }
    
  
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
                                                        name='name' type="text" 
                                                        placeholder="Enter your first name" />
                                                        <label for="name">Full Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="department" 
                                                        name='department' type="text" 
                                                        
                                                        placeholder="Enter department name" disabled/>
                                                        <label for="inputLastName">Department</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" 
                                                
                                                name='email' type="email" placeholder="name@example.com" />
                                                <label for="email">Email address</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password"
                                                        
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

export default Profile_Coodinator