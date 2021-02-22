import React from 'react';
import coverImage from "../../assets/img/colorwall.jpg"


function About() {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img scr={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About;