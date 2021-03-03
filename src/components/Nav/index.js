import React, { useEffect } from 'react';
import background from '../../assets/img/colorwall.jpg';
import ProjectList from "../ProjectList";
import myResume from "../../assets/img/Natasha-resume.pdf"
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {
    const {
        setCurrentPage,
        currentPage,
        pages = []
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name)
    }, [currentPage])

    return (

        < header className="flex-row px-1" style={{ backgroundImage: `url(${background})`, height: '250px' }} >
            <h2>
                <a data-testid="link" href="/"> Natasha Mullin</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {pages.map(page => (
                        <li className="mx-2" key={page.name}>
                            <span onClick={() => setCurrentPage(page)}>
                                {capitalizeFirstLetter(page.name)}
                            </span>
                        </li>
                    ))}
                    {/* <li className="mx-2">
                        <a data-testid="about" href="#about-me" onClick={() => setCurrentPage(currentPage)}>About Me</a>
                    </li>
                    <li>
                        <a href={<ProjectList />} onClick={() => setCurrentPage(currentPage)}>My Work</a>
                    </li>
                    <li className={`mx-2 ${currentPage && 'navActive'}`}>
                        <span onClick={() => setCurrentPage(currentPage)}>Contact Me</span>
                    </li>
                    <li>
                        <a href={myResume} download="Natasha_Mullin_Resume">My resume</a>
                    </li> */}
                </ul>
            </nav>

        </header >

    )
}

export default Nav;