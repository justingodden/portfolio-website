import React from 'react'
import '../card.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Chip from '@material-ui/core/Chip';


function Card( { id, title, img, chips, shortDescription, github, setShowModal, modalNum, setModalNum } ) {

    function onClick() {
        setModalNum(id)
        console.log(modalNum)
        setShowModal(true)
    }

    return (
        <div className="card">
            <div className="cardHeader">
                <h3>{title}</h3>
            </div>
            <div className="cardImage">
            <img src={require(`../images/${img}`).default} alt="" width="300" height="200"></img>
            </div>
            <div className="cardChips">
                {
                    chips.map((chip) => (
                        <Chip size="small" color="primary" label={chip} />
                    ))
                }
            </div>
            <div className="cardDescription">
                <p>{shortDescription}</p>
            </div>
            <div className="cardButtons">
                <Button variant="outlined" color="primary" size="small" fullWidth={true} href={github} target="_blank">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    GitHub
                </Button>
                <Button variant="contained" color="primary" size="small" fullWidth={true} onClick={onClick}>
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
