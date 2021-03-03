import React, { useState } from "react";
import Modal from '../Modal';
import Project from "../Project";

const ProjectList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [project] = useState([

        {
            name: "Day-Spa",
            description: "A website for easy scheduling for an appointment at a salon.",
            link: "https://github.com/natashamullin/we_are_back",
            repo: "https://github.com/natashamullin/we_are_back"

        },
        {
            name: "Get-Away",
            description: "Fun app for looking for activities around you.",
            link: "https://github.com/barron-a/getaway",
            repo: "https://github.com/barron-a/getaway"
        }, {
            name: "Run-Buddy",
            description: "This website is for Run Buddy. They are a service that trains runners for marathons.",
            link: "https://github.com/natashamullin/run-buddy",
            repo: "https://github.com/natashamullin/run-buddy"
        }, {
            name: "Coding-Test",
            description: "Test your coding knowledge with this great coding test.",
            link: "https://github.com/natashamullin/natashamullin-test.github.io",
            repo: "https://github.com/natashamullin/natashamullin-test.github.io"
        }, {
            name: "Budget-Tracker",
            description: "This is a simple and straight forward way to keep track of your finances",
            link: "https://github.com/natashamullin/show-me-the-money",
            repo: "https://github.com/natashamullin/show-me-the-money"
        },
    ])
    const { name, repo, link, description } = project;
    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({ ...image, index: i })
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal} />)}
            <div className="flex-row">
                {project.map((projects, i) => (
                    <div>
                        <Project
                            project={projects}
                            key={"project" + i}
                        />
                        {/* <img
                            src={require(`../../assets/img/${projects.img}`).default}
                            alt={projects.name}
                            className="img-thumbnail mx-1"
                            key={projects.name}
                        /> */}
                        <div className="project-text">
                            <h3>
                                <a href={link}>Github</a>{' '}
                                <a href={repo}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </h3>
                            <p>{description}</p>
                        </div>
                    </div>

                ))}


            </div>
        </div >
    )
}

export default ProjectList;