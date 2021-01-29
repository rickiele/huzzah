import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Huzzah } from "./components/Huzzah.js"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Huzzah />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

