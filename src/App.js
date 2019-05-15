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
              <button>
                Facebook<i class="fa fa-camera"></i>
              </button>
              <button>
                Instagram
              </button>
              <button>
                Github
              </button>
              <button>
                LinkedIn
              </button>
              <button>
                Twitter
              </button>
            </div>
          } />
        </Switch>
      </div>
    )
  }
}

export default App;
