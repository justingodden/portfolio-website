import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

function Projects() {
    const [showModal, setShowModal] = useState(true)

    return (
        <>
            {
                showModal && <Modal />
            }
            <div className="projects">
                <Card />
            </div>
        </>
    )
}

export default Projects
