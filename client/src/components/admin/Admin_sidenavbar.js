import React from 'react'
import {NavLink} from 'react-router-dom'

function Admin_sidenavbar() {
  return (
  <div id='layoutSidenav'>
    <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu"><br></br>
            <div className="nav">
                <NavLink className="nav-link" to="/Admin">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/Admin/Coordinators_Admin">
                    <div className="sb-nav-link-icon"><i className="fas fa-id-card"></i></div>
                    Coordinators
                </NavLink>
                <NavLink className="nav-link" to="/Admin/Events_Admin">
                    <div className="sb-nav-link-icon"><i className="fas fa-university"></i></div>
                    Events
                </NavLink>
                <NavLink className="nav-link" to="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-calendar-alt"></i></div>
                    Schdeule
                </NavLink>
                <NavLink className="nav-link" to="/Admin/Departments_Admin">
                    <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                    Departments
                </NavLink>
                
                <div className="sb-sidenav-menu-heading">Reports</div>
                <NavLink className="nav-link" to="charts.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Particpants
                </NavLink>
                <NavLink className="nav-link" to="tables.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Events
                </NavLink>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Admin
        </div>
    </nav>
</div>
</div>
  )
}

export default Admin_sidenavbar