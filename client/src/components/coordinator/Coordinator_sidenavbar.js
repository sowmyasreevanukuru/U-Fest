import React from 'react'
import {NavLink} from 'react-router-dom'

function Coordinator_sidenavbar() {
  return (
  <div id='layoutSidenav'>
    <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu"><br></br>
            <div className="nav">
                <NavLink className="nav-link" to="/Coordinator">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/Coordinator/VerifyTeams_Coordinator">
                    <div className="sb-nav-link-icon"><i className="fas fa-id-card"></i></div>
                    Verify Teams
                </NavLink>
                <NavLink className="nav-link" to="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-university"></i></div>
                    Event Details
                </NavLink>
                <NavLink className="nav-link" to="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-calendar-alt"></i></div>
                    Particpants
                </NavLink>
                <NavLink className="nav-link" to="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                    Sequence
                </NavLink>
                
                <div className="sb-sidenav-menu-heading">Reports</div>
                <NavLink className="nav-link" to="charts.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Particpants
                </NavLink>
                <NavLink className="nav-link" to="tables.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Results
                </NavLink>

                <div className="sb-sidenav-menu-heading">Your Account</div>
                <NavLink className="nav-link" to="/">
                    <div className="sb-nav-link-icon"><i className="fa fa-user me-2"></i></div>
                    Profile
                </NavLink>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Coordinator
        </div>
    </nav>
</div>
</div>
  )
}

export default Coordinator_sidenavbar