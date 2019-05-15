import React from 'react'
import './Aboutme.css'
import { Route } from 'react-router-dom'

class Aboutme extends React.Component {
    render() {
        return(
            <div className="Aboutme">
                 <Route exact path="/aboutme" render={() => <h3>About Me</h3>}/>
            </div>
        )
    }
}

export default Aboutme