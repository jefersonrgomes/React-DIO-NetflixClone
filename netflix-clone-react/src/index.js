import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/utils/Global.css';
import Footer from './components/Footer';
import Home from './components/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
