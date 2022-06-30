import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Buy  from "./components/Buy";
import  Tickets  from "./components/Tickets";


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component = {App} />
        <Route exact path="/events" component = {App} />
        <Route exact path="/buy/:id" component = {Buy} />
        <Route exact path="/tickets/:id" component={Tickets} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
