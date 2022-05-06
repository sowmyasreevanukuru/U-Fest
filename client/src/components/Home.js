import React from 'react'
import {NavLink} from 'react-router-dom'
import Event from '../components/Event'
function Home(props) {
  let email = localStorage.getItem("email");
    // if(localStorage.getItem("email") !== null)
    // {
    //     window.history.back();
    // }
  
  localStorage.clear();
  return (
    <div>
    <section id="home">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
                <h1 className="display-4 fw-bolder mb-4 text-center text-white"><br></br>College Event Management System</h1>
                <p className="lead text-center fs-4 mb-5 text-white"></p>
                <div className="buttons d-flex justify-content-center">
                    <NavLink to="/Login" className="btn btn-light me-4 rounded-pill px-4 py-2">Login</NavLink>
                    <NavLink to="/Register" className="btn btn-outline-light rounded-pill px-4 py-2">Register</NavLink>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Event/>
    </div>

  )
}

export default Home