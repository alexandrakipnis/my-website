import React, {Component} from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Resume from './Resume'
import Aboutme from './Aboutme'
import Passions from './Passions'
import Goals from './Goals'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navLinks">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/passions">Passions</NavLink>
          </li>
          <li>
            <NavLink to="/goals">Goals</NavLink>
          </li>

        </ul>
        <Switch>
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/resume" component={Resume} />
          <Route path="/passions" component={Passions} />
          <Route path="/goals" component={Goals} />
          <Route path = "/home" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;
