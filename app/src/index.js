import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import WC from './WC.js';
import Form from './form.js'; 
import './index.css';
import Carousel from './carousel.js';
import Feed from './twitter_embed.js';
ReactDOM.render(
  <React.StrictMode>
    <Carousel/> 
    <Form className="center_this"/> 
    <Reviews /> 
    <WC />
    <Feed />
  </React.StrictMode>,
  document.getElementById('root')
);

