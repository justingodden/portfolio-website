import React from 'react'
import '../modal.css'
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import projectData from '../data/projectData.js'


function Modal({ setShowModal, modalNum }) {

    return (
        <div className="backdrop">
            <div className="modal">
                <img className="modalImg"src={require(`../images/${projectData[modalNum].imgDisplay}`).default} alt=""></img>
                <div className="modalContent">
                    <div className="modalClose">
                        <IconButton size="small" onClick={() => setShowModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <h2 className="modalTitle">{projectData[modalNum].title}</h2>
                    <div className="modalContentChips">
                        {
                            projectData[modalNum].chips.map((chip) => (
                                <Chip size="small" color="primary" label={chip} />
                            ))
                        }
                    </div>
                    <p className="modalContentText">{projectData[modalNum].longDescription}
                    </p>
                    <div className="modalContentButtons">
                    <Button
                        className="button"
                        variant="contained"
                        color="primary"
                        href={projectData[modalNum].website}
                        target="_blank"
                    >
                        <VisibilitySharpIcon className ="icon" />
                        View Website
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
