import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route path = "/" component={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

