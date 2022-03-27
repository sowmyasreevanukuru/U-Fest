import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import './App.css';

const App = () => (
  <Router>
        <Fragment>
          <Navbar/>
          <section className="container">
          
            <Routes>
             
              <Route exact path="/Register" element={<Register/>}/>
              <Route exact path="/Login" element={<Login/>}/>
              
            </Routes>
          </section>
          <Footer/>
        </Fragment>
 </Router>
);

export default App;
