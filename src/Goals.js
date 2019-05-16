import React from 'react'
import './Goals.css'
import { Route } from 'react-router-dom'

class Goals extends React.Component {
    render() {
        return(
            <div className="Goals">
                 <Route exact path="/goals" render={() => <h3>Goals</h3>}/>
            </div>
        )
    }
}

export default Goals