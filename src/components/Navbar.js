import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';

function Navbar({ projects, setProjects }) {
    return (
        <div className="navbar">
            <div className="navbarLeft">
                <h2 className="navbarInitials">JG</h2>
                <h2 className="navbarName">Justin Godden</h2>
            </div>
            <div className="navbarRight">
            <IconButton>
                <GitHubIcon />
            </IconButton>
            <IconButton>
                <LinkedInIcon />
            </IconButton>
            <IconButton onClick={() => setProjects(false)}>
                <HomeIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Navbar
