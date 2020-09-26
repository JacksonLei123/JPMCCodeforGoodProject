import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import WC from './WC.js';
import Form from './form.js'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Reviews />
    <Form className="center_this"/>
    <WC />
  </React.StrictMode>,
  document.getElementById('root')
);

