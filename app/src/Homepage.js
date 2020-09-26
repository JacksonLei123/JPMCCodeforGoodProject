import React from 'react';
import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import './App.css';
import video from 'some video';
import image1 from 'some local file probably';
import schoolLogo from 'local image not been defined yet';

class Homepage extends ReactBootstrap {

    constructor(props) {
        super(props);
    
       // main frame for the homepage I'm assuming we're putting functions 
       // and objects here but not sure how
      }

} 

// tab function, returns tabs
export default function tabs() {

    return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="aboutpqc" title="About PQC">
    <Sonnet />
  </Tab>
  <Tab eventKey="academics" title="Academics">
    <Sonnet />
  </Tab>
  <Tab eventKey="reviews" title="Reviews">
    <Sonnet />
  </Tab>
</Tabs>
    )
}

// below is the basic templates for videos and pictures

// class Video extends Component {
//     render() {
//       return (
//         <div>
//           <video src={"place the video variable here it should be imported from the top"} />
//         </div>
//       );
//     }
//   }
  

//   class Header extends Component {
//     render() {
//       return (
//         <div className="row">
//           <div className="picture">
//             <img src={image1} width="100" height="50" />
//           </div>
//         </div>
//       );
//     }
//   } 


// export default class Header extends Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="logo">
//           <img src={schoolLogo} width="100" height="50" />
//         </div>
//       </div>
//     );
//   }
// } 



  









  