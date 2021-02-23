import React, { useState } from "react";
import Modal from '../Modal';

const ProjectList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects] = useState([
        {
            name: "Day Spa",
            description: "A website for easy scheduling for an appointment at a salon."
        },
        {
            name: "Get Away",
            description: "Fun app for looking for activities around you."
        }, {
            name: "Run Buddy",
            description: "This website is for Run Buddy. They are a service that trains runners for marathons."
        }, {
            name: "Coding Test",
            description: "Test your coding knowledge with this great coding test."
        }, {
            name: "place holder",
            description: "I need another one"
        }, {
            name: "place holder",
            description: "I need another one"
        }
    ])
    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({ ...image, index: i })
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal} />)}
            <div className="flex-row">
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/img/${projects}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;