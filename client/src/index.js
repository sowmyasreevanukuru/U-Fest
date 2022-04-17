import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import 'css/styles.css'
//import "../../client/public/css/styles.css"
ReactDOM.render(
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
    , 
    document.getElementById('root')
));
