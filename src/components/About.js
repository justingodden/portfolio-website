import React from 'react'
import Button from '@material-ui/core/Button';


function About({ projects, setProjects }) {
    return (
        <div className="about">
            <p className="aboutName">Hi, I'm
                <span className="aboutNameBlue"> Justin</span>.</p>
            <h2 className="aboutH2">I'm a Data Scientist working in London.</h2>
            <h2 className="aboutH2">Check out my projects below!</h2>
            <Button className="button" variant="contained" color="primary" onClick={() => setProjects(true)}>
                Projects
            </Button>
        </div>
    )
}

export default About
