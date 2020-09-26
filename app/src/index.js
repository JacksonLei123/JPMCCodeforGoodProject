import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import WC from './WC.js';
import Form from './form.js'; 
import './index.css';
import Carousel from './Carousel'
ReactDOM.render(
  <React.StrictMode>

    <Reviews />
    <Form className="center_this"/>
    <Carousel/> 
    <Reviews /> 
    <WC />
  </React.StrictMode>,
  document.getElementById('root')
);

