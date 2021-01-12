import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

function Projects() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {
                showModal && <Modal setShowModal={setShowModal}/>
            }
            <div className="topSpace"></div>
            <div className="projects">
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                <Card setShowModal={setShowModal}/>
                
            </div>
        </>
    )
}

export default Projects
