import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import WC from './WC.js';
import './index.css';
import Carousel from './Carousel'
ReactDOM.render(
  <React.StrictMode>
   <Carousel/> 
    <Reviews /> 
    <WC />
  </React.StrictMode>,
  document.getElementById('root')
);

