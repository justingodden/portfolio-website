import React from 'react'
import '../modal.css'

function Modal() {
    return (
        <div className="backdrop">
            <div className="modal">
                <div className="modalImgContainer">
                    <img className="modalImg"></img>
                </div>
                <div className="modalContent">
                    <h2>Project Title</h2>
                    <div className="modalContentChips">

                    </div>
                    <div className="modalContentText">
                        Words about the project
                    </div>
                    <div className="modalContentButtons"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal
