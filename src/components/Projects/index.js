import React, { useState } from "react";

const ProjectList = () => {

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

    return (
        <div>
            <div className="flex-row">
                <img
                    src={require(`../../assets/img/${projects}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                />

            </div>
        </div>
    )
}

export default ProjectList;