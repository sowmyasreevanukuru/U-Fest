import React from 'react'
import { Outlet } from 'react-router-dom'
import Admin_navbar from './Admin_navbar'

function Backend(props) {
  return (
    <div>
        <Admin_navbar/>
        <Outlet/>
    </div>
  )
}

export default Backend