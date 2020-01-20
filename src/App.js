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
import OrderDetails from './component/OrderDetails';
import ManageOrders from './component/ManageOrders';
import AdminBookEdit from './component/AdminBookEdit';
import AdminBookCreate from './component/AdminBookCreate';

class App extends Component {
  handleLogin=()=>{
    this.props.history.push('./Login');
  }
  render() {
    return (
      <Router className="app-theme">
        <div className="app-body">
        <span><b>BookStore</b></span>
        <button>SignUp</button>
        <button>Login</button></div>
        <Header /><br/>
        <hr />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/books' component={Books} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={CheckOut} />
          <Route path='/OrderDeatails' component={OrderDetails} />
          <Route path='/managebooks' component={ManageBooks} />
          <Route path='/manageOrders' component={ManageOrders} />
          <Route path='/adminBookEdit/:id' component={AdminBookEdit} />
          <Route path='/adminBookCreate' component={AdminBookCreate} />
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
