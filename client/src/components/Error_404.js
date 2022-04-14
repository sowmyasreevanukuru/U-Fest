import React from 'react'
import { NavLink } from 'react-router-dom'

function Error_404(props) {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template" style={{padding: "40px 15px",textAlign: "center"}}>
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <NavLink to="/" className="btn btn-dark me-4 rounded-pill px-4 py-2">TAKE ME HOME</NavLink>
            </div>
        </div>
    </div>
</div>
  )
}

export default Error_404