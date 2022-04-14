import React from 'react'
import {NavLink} from 'react-router-dom'
import Event from './layouts/Event'
function Home(props) {
  return (
    <div>
    <section id="home">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
                <h1 className="display-4 fw-bolder mb-4 text-center text-white"><br></br>Inter College Event Management System</h1>
                <p className="lead text-center fs-4 mb-5 text-white">Various events organized at college level</p>
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