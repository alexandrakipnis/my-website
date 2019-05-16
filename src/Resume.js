import React from 'react'
import './Resume.css'
import { Route } from 'react-router-dom'

class Resume extends React.Component {
    render() {
        return(
            <div className="Resume">
                 <Route exact path="/resume" render={() => <h3>Resume</h3>}/>
            </div>
        )
    }
}

export default Resume