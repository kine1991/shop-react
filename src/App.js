import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component'
import CheckoutPage from './pages/checkout/checkout.component'
import ShopPage from './pages/shop/shop.component'
import './App.scss';

const Home = () => (<div>Home</div>)
const SignIn = () => (<div>SignIn</div>)

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/singin" render={() => true ? <Redirect to="/"/> : <SignIn/>}/>
        </Switch>
      </div>
    )
  }
}


export default App