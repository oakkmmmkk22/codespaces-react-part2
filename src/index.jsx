import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MouseEvent from './MouseEvent';
import reportWebVitals from './reportWebVitals';
import ItemList from './ItemList';
import Bmi from './Bmi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Bmi />
);

reportWebVitals();
