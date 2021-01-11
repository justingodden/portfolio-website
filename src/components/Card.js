import React from 'react'
import '../card.css';
import image from "../images/guitar.jpg"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Chip from '@material-ui/core/Chip';


function Card() {
    return (
        <div className="card">
            <div className="cardHeader">
                <h3>Project Title</h3>
            </div>
            <div className="cardImage">
            <img src={image} alt="" width="300" height="200"></img>
            </div>
            <div className="cardChip">
                <Chip size="small" color="primary" label="React" />
            </div>
            <div className="cardDescription">
                <p>This is a description of the project. It could be a whole paragraph long!</p>
            </div>
            <div className="cardButtons">
                <Button className="button" variant="outlined" color="primary" size="small">
                <IconButton>
                <MenuBookSharpIcon />
            </IconButton>Jupyter
                </Button>
                <Button className="button" variant="outlined" color="primary" size="small">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    GitHub
                </Button>
                <Button className="button" variant="contained" color="primary" size="small">
                    <IconButton>
                        <VisibilitySharpIcon />
                    </IconButton>
                    View
                </Button>
            </div>
        </div>
    )
}

export default Card
