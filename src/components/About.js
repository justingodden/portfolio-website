import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function About() {
    let history = useHistory()

    return (
        <div className="about">
            <p className="aboutName">Hi, I'm
                <span className="aboutNameBlue"> Justin</span>.</p>
            <h2 className="aboutH2">I'm a Data Scientist working in London.</h2>
            <h2 className="aboutH2">Check out my projects below!</h2>
            <p></p>
            <Button className="button" variant="contained" color="primary" onClick={() => history.push('/projects')}>
                Projects
            </Button>
        </div>
    )
}

export default About
