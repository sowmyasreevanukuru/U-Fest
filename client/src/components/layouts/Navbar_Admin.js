import React from 'react'
import SideNav_Admin from './SideNav_Admin'
import { NavLink } from 'react-router-dom';

export const Navbar_Admin = () => {
  return (
    <div className='sb-nav-fixed'>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">    
            <NavLink className="navbar-brand ps-3" to="/Dashboard_Admin">U-FEST</NavLink>
            <ul class="navbar-nav ms-auto ms-md-6 me-4 me-lg-3">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Account</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <SideNav_Admin/>
    </div>
  )
}
export default Navbar_Admin