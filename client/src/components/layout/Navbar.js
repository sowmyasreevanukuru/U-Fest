import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
       
        <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <Link to="./Home" className="w3-bar-item w3-button"><b></b>U-FEST</Link>
        
        <div className="w3-right w3-hide-small">
            <Link to="#contact" className="w3-bar-item w3-button">Events</Link>
            <Link to="#about" className="w3-bar-item w3-button">Schedule</Link>
            <Link to="/Register" className="w3-bar-item w3-button">Register</Link>
            <Link to="/Login" className="w3-bar-item w3-button">Login</Link>
            
        </div>
        </div>
        </div>
        
  )
}

export default Navbar