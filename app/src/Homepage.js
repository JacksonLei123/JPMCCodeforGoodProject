import React, {Component} from "react";
import {Tabs, Tab} from 'react-tabs';
import Sonnet from 'react-bootstrap-tabs';
import {ReactDOM} from 'react-dom';
import 'bootswatch/dist/cyborg/bootstrap.min.css'; 
import logo from './logo192.png';

class NavBar extends Component {

    render() {
        return (
    //     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    //     <Tab eventKey="home" title="Home">
    //       <Sonnet />
    //     </Tab>
    //     <Tab eventKey="aboutpqc" title="About PQC">
    //       <Sonnet />
    //     </Tab>
    //     <Tab eventKey="academics" title="Academics">
    //       <Sonnet />
    //     </Tab>
    //     <Tab eventKey="reviews" title="Reviews">
    //       <Sonnet />
    //     </Tab>
    //   </Tabs>
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
            
            <img src = {logo} alt="Italian Trulli"></img>
        );

    }

    
}

class App extends Component {

    render() {
        return  (
        <div><NavBar/> 
        <br/><Photos/></div>

            
    );
    }


}
export default App;