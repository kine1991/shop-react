import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component'
import './App.scss';

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)
const SignIn = () => (<div>SignIn</div>)

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/singin" render={() => true ? <Redirect to="/"/> : <SignIn/>}/>
        </Switch>
      </div>
    )
  }
}


export default App