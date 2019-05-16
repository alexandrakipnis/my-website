import React from 'react'
import './Aboutme.css'
import { Route } from 'react-router-dom'

class Aboutme extends React.Component {
    render() {
        return(
            <div className="Aboutme">
                <div className="container">
                    <img src="selfie2.jpg" alt="Avatar" class="image"/>
                        {/* <h1>About Me</h1> */}
                </div>
                    
            </div>
        )
    }
}

export default Aboutme