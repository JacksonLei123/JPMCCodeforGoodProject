import React, {Component} from "react";
import {Tabs, Tab} from 'react-tabs';
import Sonnet from 'react-bootstrap-tabs';
import {ReactDOM} from 'react-dom';
import 'bootswatch/dist/cyborg/bootstrap.min.css'; 
import logo from './photos/logo.png';
import farm from './photos/farm.png'
import citylights from './photos/citylights.png'
import business from './photos/business.png'
import video from './photos/collegeintro.mp4'

class NavBar extends Component {

    render() {
        return (
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className ="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
    
  </div>
        </nav>

        );
           
      }

}

class Photos extends Component {

    render() {

        return (
        <div>
            <img src = {logo} alt="logo"></img>
            <div >
            <br/>
            LEAVE places better than you found them.
            <br/>
            LEAD from wherever you are.
            <br/>
            LIVE a life that matters.
            <br/>
            LOVE something greater than yourself.
            </div>
        </div>
            
        );

    }

    
}

class Images extends Component {
    render() {

        return (
        <div>
            <img src = {farm} alt="farm"></img>
            <img src = {citylights} alt = "citylights" ></img>
            <img src = {business} alt = "business"></img>
            <br/>
        </div>

        );
    }
}

class App extends Component {

    render() {
        return  (
        <div><Photos/>
        <br/><NavBar/>
        <br/><Images/></div>

            
    );
    }


}
export default App;