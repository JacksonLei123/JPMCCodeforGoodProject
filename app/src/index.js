import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js';
import './index.css';
import WC from './WC.js'; 

ReactDOM.render(
  <React.StrictMode>
    <Reviews />
    <div>
      <WC />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

