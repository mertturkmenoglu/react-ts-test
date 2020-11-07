import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        {/*Navbar?*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
