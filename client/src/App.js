import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import '../node_modules/bootstrap/dist/css/bootstap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar_Admin from './components/layouts/Navbar_Admin';
import Dashboard_Admin from './components/layouts/Dashboard_Admin';
import Coordinators_Admin from './components/layouts/Coordinators_Admin';
// import Login from './components/layouts/Login';
// import Home from './components/layouts/Home';
// import Event from './components/layouts/Event';
// import Register from './components/layouts/Register';
// import Navbar from './components/layouts/Navbar';
// import Footer from './components/layouts/Footer';
const App = () => (
  <Router>
        <Fragment>
        
          <Navbar_Admin/>
            <Routes>
              <Route exact path="/Dashboard_Admin" element={<Dashboard_Admin/>}/>
              <Route exact path="/Coordinators_Admin" element={<Coordinators_Admin/>}/>
              
            </Routes>
          
        </Fragment>
 </Router>
);

export default App;
