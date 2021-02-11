import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Huzzah } from "./components/Huzzah.js"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./custom.scss";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Huzzah />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

