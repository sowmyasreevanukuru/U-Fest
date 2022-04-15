import React from 'react';
import { Outlet } from 'react-router-dom';
import Coordinator_navbar from './Coordinator_navbar';

function Backend_C(props) {
  return (
    <div>
        <Coordinator_navbar/>
        <Outlet/>
    </div>
  )
}

export default Backend_C