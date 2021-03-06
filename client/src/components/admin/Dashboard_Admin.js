import React from 'react'

function Dashboard_Admin() {
    let email = localStorage.getItem("email");
    if(localStorage.getItem("email") === null)
    {
        window.location.href="./";
       // console.log(email+"hi")
    }
  return (
    <div className='sb-nav-fixed'>
    <div id='layoutSidenav'>
    <div id="layoutSidenav_content">
    <main>
        <div className="container-fluid">
            <h1 className="mt-5">Dashboard</h1>
            <ol className="breadcrumb"></ol>
            <hr/>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Number of Departments</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div className='small text-white'>10</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Number of Events</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div className='small text-white'>10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</div>
</div>      
  )
}

export default Dashboard_Admin