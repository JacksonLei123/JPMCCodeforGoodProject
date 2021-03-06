import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import WC from './WC.js';
import Form from './form.js'; 
import './index.css';
import Carousel from './carousel.js';
import Feed from './twitter_embed.js';
import EmailList from './EmailList.js'; 
ReactDOM.render(
  <React.StrictMode>
    <Carousel /> 
    <Form className="center_this"/> 
    <p></p>
    <Reviews /> 
    <p></p>
    <WC />
    <p></p>
    <Feed />
    <p></p>
    <EmailList />
    <p></p>
  </React.StrictMode>,
  document.getElementById('root')
);

