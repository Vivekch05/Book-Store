import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Books from './component/Books';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Cart from './component/Cart';
import CheckOut from './component/CheckOut';
import ManageBooks from './component/ManageBooks';
import Login from './component/Login';
import SignUp from './component/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="app-body">
        <h1>BookStore</h1>
        <Header />
        <hr />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/books' component={Books} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={CheckOut} />
          <Route path='/managebooks' component={ManageBooks} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <hr />
        <Footer />
      </Router>
    )
  }
}

export default App;
