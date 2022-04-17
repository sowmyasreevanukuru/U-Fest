import React from 'react'
import Admin_sidenavbar from './Admin_sidenavbar'
import {NavLink} from 'react-router-dom'

function Admin_navbar() {
    
  return (
    <div className='sb-nav-fixed'>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">    
            <NavLink className="navbar-brand ps-3" to="/Admin">U-FEST</NavLink>
            <ul className="navbar-nav ms-auto ms-md-6 me-4 me-lg-3">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        
                        <li><a className="dropdown-item" href="/">Logout</a></li>
                    
                    </ul>
                </li>
            </ul>
        </nav>
        <Admin_sidenavbar/>
    </div>
  )
}

export default Admin_navbar