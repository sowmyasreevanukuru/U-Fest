import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize:"20px"}}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Event" style={{fontSize:"20px"}}>Events</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Schedule" style={{fontSize:"20px"}}>Schedule</NavLink>
                </li>
            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/Home">U-FEST</NavLink>
            <NavLink to="/Login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                <i className="fa fa-user me-2"></i>Login</NavLink>
            <NavLink to="/Register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                <i className="fa fa-user-plus me-2"></i>Register</NavLink>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header