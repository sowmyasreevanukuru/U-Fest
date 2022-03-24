import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Redirect to="/" />
  </Switch>
    </>
  );
};

export default App;
