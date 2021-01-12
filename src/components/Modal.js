import React, { useState, useEffect } from 'react'
import '../modal.css'
import carpricing from "../images/carpricing-mobile.gif"
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';



function Modal({ setShowModal }) {

    return (
        <div className="backdrop">
            <div className="modal">
                <img className="modalImg"src={carpricing} alt="" width="auto" height="100%"></img>
                <div className="modalContent">
                    <div className="modalClose">
                        <IconButton size="small" onClick={() => setShowModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <h2 className="modalTitle">Project Title</h2>
                    <div className="modalContentChips">
                        <Chip size="small" color="primary" label="React" />
                        <Chip size="small" color="primary" label="JS" />
                    </div>
                    <p className="modalContentText">Words about the project Words about the project Words about the project Words about the project Words about the project Words about the project Words about the project
                        Words about the project Words about the project Words about the project Words about the proj
                    </p>
                    <div className="modalContentButtons">
                    <Button className="button" variant="contained" color="primary" size="small">
                        <IconButton>
                            <VisibilitySharpIcon />
                        </IconButton>View Website
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
