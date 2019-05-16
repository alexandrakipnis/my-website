import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
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
        )
    }
}
export default Home