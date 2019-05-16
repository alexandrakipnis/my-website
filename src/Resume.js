import React from 'react'
import './Resume.css'
import { Route } from 'react-router-dom'

class Resume extends React.Component {
    render() {
        return(
            <div className="Resume">
                 <div className="sections">
                    <p className="education">
                        Education
                    </p>
                    <p className="skills">
                        Skills
                    </p>
                    <p className="experience">
                        Experience
                    </p>
                    <p className="leadership">
                        Leadership
                    </p>
                </div>
            </div>
        )
    }
}

export default Resume