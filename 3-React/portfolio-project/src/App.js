import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Services from './components/Pages/Services.js';
import Connect from './components/Pages/Connect.js';
import Products from './components/Pages/Products.js';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/connect' component={Connect} />
        <Route path='/products' component={Products} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
