import React from 'react'
import './Passions.css'
import { Route } from 'react-router-dom'

class Passions extends React.Component {
    render() {
        return(
            <div className="Passions">
                 <Route exact path="/passions" render={() => <h3>Passions</h3>}/>
            </div>
        )
    }
}

export default Passions