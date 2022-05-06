//import React,{Fragment} from 'react';
//import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import '../node_modules/bootstrap/dist/css/bootstap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
//import Navbar_Admin from './components/layouts/Navbar_Admin';
//import Dashboard_Admin from './components/layouts/Dashboard_Admin';
//import Coordinators_Admin from './components/layouts/Coordinators_Admin';
// import Login from './components/layouts/Login';
// import Home from './components/layouts/Home';
// import Event from './components/layouts/Event';
// import Register from './components/layouts/Register';
// import Navbar from './components/layouts/Navbar';
// import Footer from './components/layouts/Footer';
// //Redux
// import { Provider } from 'react-redux';
// import store from './store';

import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Frontend from './components/main/Frontend';
import Backend from './components/admin/Backend';
import Backend_C from './components/coordinator/Backend_C';
import Home from './components/Home';
import Admin from './components/admin/Admin';
import Error_404 from './components/Error_404';
import Login from './components/Login';
import Event from './components/Event';
import Register from './components/Register';
import Coordinators_Admin from './components/admin/Coordinators_Admin';
import Coordinator from './components/coordinator/Coordinator';
import VerifyTeams_Coordinator from './components/coordinator/VerifyTeams_Coordinator';
import Departments_Admin from './components/admin/Departments_Admin';
import Events_Admin from './components/admin/Events_Admin';
import Profile_Admin from './components/admin/Profile_Admin';
import Schedule from './components/Schedule';
import Profile_Coodinator from './components/coordinator/Profile_Coordinator';
import EventDetails_Coordinator from './components/coordinator/EventDetails_Coordinator';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { Provider } from 'react-redux';

function App(props) { 
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Frontend/>}>
          <Route index element={<Home/>}/>
          <Route path='/Event' element={<Event/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Schedule' element={<Schedule/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/password-reset' element={<ResetPassword/>}/>
        </Route>
        
        <Route path='/Admin' element={<Backend/>}>
          <Route index element={<Admin/>}/>
          <Route path='Coordinators_Admin' element={<Coordinators_Admin/>}/>
          <Route path='Departments_Admin' element={<Departments_Admin/>}/>
          <Route path='Events_Admin' element={<Events_Admin/>}/>
          <Route path='Profile_Admin' element={<Profile_Admin/>}/>
          
        </Route>
        
        <Route path='/Coordinator' element={<Backend_C/>}>
          <Route index element={<Coordinator/>}/>
          <Route path='VerifyTeams_Coordinator' element={<VerifyTeams_Coordinator/>}/>
          <Route path='Profile_Coordinator' element={<Profile_Coodinator/>}/>
          <Route path='EventDetails_Coordinator' element={<EventDetails_Coordinator/>}/>
        </Route>
        <Route path="*" element={<Error_404/>}/>
      </Routes>
       
    </div>
  )
}
export default App;
