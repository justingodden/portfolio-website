import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

function Navbar() {
    let history = useHistory()

    return (
        <div className="navbar">
            <div className="navbarLeft">
                <h2 className="navbarInitials">JG</h2>
                <h2 className="navbarName">Justin Godden</h2>
            </div>
            <div className="navbarRight">
            <IconButton href='https://github.com/justingodden' target="_blank">
                <GitHubIcon />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/justingodden/' target="_blank">
                <LinkedInIcon />
            </IconButton>
            <IconButton onClick={() => history.push('/')}>
                <HomeIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Navbar
