import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Form, Button, FormControl,NavDropdown} from 'react-bootstrap';
function Carousel() {
  return (
    <div>
    <div className="App">
      <Navbar className="Nav" bg="light" expand="lg">
      <Navbar.Brand className="Nav" href="#home">Paul Quinn</Navbar.Brand>
      </Navbar>
      
    </div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href = "http://www.pqc.edu/life-in-dallas/">
            <img className="d-block w-100" src="https://i.ibb.co/G728tF6/Webp-net-resizeimage.jpg" alt="First slide"/>
          </a>
          <div className="carousel-caption d-none d-md-block">
              <h5>Life in Dallas</h5>
              <p>Click here to learn more about living the 4th largest metroplitan area</p>
            </div>
        </div>
        <div className="carousel-item">
          <a href = "http://www.pqc.edu/wp-content/uploads/2015/03/PQC-New-Model-Press-Release.pdf">
          <img className="d-block w-100" src="https://i.ibb.co/bB6m8sh/Webp-net-resizeimage-1.jpg" alt="Second slide" />
          </a>
          <div className="carousel-caption d-none d-md-block">
              <h5>New Tuition Model</h5>
              <p>Click here to learn about the first urban work college and how students take on almost no financial burden</p>
            </div>
        </div>
        <div className="carousel-item">
          <a href = "http://www.pqc.edu/degree-programs/">
          <img className="d-block w-100" src="https://i.ibb.co/KXKN0kc/Webp-net-resizeimage-2.jpg" alt="Third slide" />
          </a>
          <div className="carousel-caption d-none d-md-block">
              <h5>Degree Programs</h5>
              <p>Click here to learn about starting your own company and leading in your field</p>
            </div>
        </div>
        <div className="carousel-item">
          <a href = "http://www.pqc.edu/we-over-me-farm/">
          <img className="d-block w-100" src="https://i.ibb.co/840LwJq/Webp-net-resizeimage-3.jpg" alt="Fourth slide" />
          </a>
          <div className="carousel-caption d-none d-md-block">
              <h5>We Over Me Farm</h5>
              <p>Click here to learn about how we've grown over 30,000 pounds of produce for our community</p>
            </div>
        </div>
        <div className="carousel-item">
          <a href = "https://pqc-edu.squarespace.com/alumni">
          <img className="d-block w-100" src="https://i.ibb.co/VxNx2qb/Webp-net-resizeimage-6.jpg" alt="Fifth slide" />
      </a>
          <div className="carousel-caption d-none d-md-block">
              <h5>Alumni Affairs</h5>
              <p>Click here to find about what today's students are up to</p>
            </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default Carousel;