import React from 'react';
//import { Route, Router, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import Report from './Pages/Report';


function App() {
  return (
    <div>

      <Router>

      <NavBar />

      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/report" exact component={Report}/>
        <Route path="/product" exact component={Product}/>

      </Switch>
      </Router>

    </div>
  );
}

export default App;
