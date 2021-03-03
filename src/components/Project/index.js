import React from 'react';


function Project({ project }) {

    const { name, description, repo, link } = project;

    return (
        <div className="project" key={name}>
            <img
                src={require(`../../assets/img/${name}.png`).default}
                alt=""
                className="project-bg"
            />
            <div className="project-text">
                <h3>
                    <a href={project.link}>GitHub</a>{' '}
                    <a href={project.repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;


