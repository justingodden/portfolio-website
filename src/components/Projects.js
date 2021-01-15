import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'
import ProjectData from './ProjectData'

function Projects() {
    const [showModal, setShowModal] = useState(false)
    const [modalNum, setModalNum] = useState(null)

    return (
        <>
            {
                showModal && <Modal 
                                setShowModal={setShowModal}
                                modalNum={modalNum}
                            />
            }
            <div className="topSpace"></div>
            <div className="projects">
                {
                    ProjectData.map((project, i) => (
                        <Card
                            key={i}
                            id={i}
                            title={project.title}
                            img={project.img}
                            imgDisplay={project.imgDisplay}
                            chips={project.chips}
                            shortDescription={project.shortDescription}
                            longDescription={project.longDescription}
                            github={project.github}
                            website={project.website}
                            setShowModal={setShowModal}
                            setModalNum={setModalNum}
                            modalNum={modalNum}
                        /> 
                    ))
                }        
            </div>
        </>
    )
}

export default Projects
