import React from 'react';


function Nav() {
    return (
        <header>
            <h1>Natasha Mullin</h1>
            <nav>
                <ul>
                    <li> <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="#hit-me-up">Contact me</a>
                    </li>
                    <li>
                        <a href="#my-resume">My resume</a>
                    </li>
                </ul>
            </nav>
            {/* <background-image: src="./img/colorflower.jpg" ;></background-image:>
                <img src="./img/natasha.jpg" alt="my beautiful face goes here" width="250" height="400" /> */}
        </header >
    )
}

export default Nav;