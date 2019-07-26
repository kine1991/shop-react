import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component'
import './App.scss';

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    )
  }
}


export default App