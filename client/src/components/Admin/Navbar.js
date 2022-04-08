import React from 'react'
import { NavLink } from 'react-router-dom'
import SideNavbar from './SideNavbar'
export const Navbar = () => {
  return (
    <div  className='sb-nav-fixed'>
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">U-FEST</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
    </nav>
    <SideNavbar/>
    </div>
  )
}
export default Navbar