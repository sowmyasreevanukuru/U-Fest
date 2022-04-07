import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import '../node_modules/bootstrap/dist/css/bootstap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';
import Event from './components/layouts/Event';
import Register from './components/layouts/Register';

const App = () => (
  <Router>
        <Fragment>
          <Navbar/> 
          <section className="container">
            <Routes>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/Login" element={<Login/>}/>
              <Route exact path="/Event" element={<Event/>}/>
              <Route exact path="/Register" element={<Register/>}/>
            </Routes>
          </section>
          <Footer/>
        </Fragment>
 </Router>
);

export default App;
