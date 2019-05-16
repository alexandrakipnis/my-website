import React, {Component} from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Resume from './Resume'
import Aboutme from './Aboutme'
import Passions from './Passions'
import Goals from './Goals'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navLinks">
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
          <Route render={() => 
            <div>
              I'm Sasha Kipnis.
              <p classname="homepage">
                Welcome to my personal website. Click on the tabs above to get to know me. Read my accomplishments, explore my passions, and learn my goals. 
              </p>
              <a href="https://github.com/alexandrakipnis" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sasha-alexandra-kipnis/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/sasha.kipnis.92" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/sashkip" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/_sashkip" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          } />
        </Switch>
      </div>
    )
  }
}

export default App;
