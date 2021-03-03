import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import ProjectList from '../ProjectList';
import Contact from '../Contact';



function Page({ currentPage }) {
    console.log(currentPage)
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <ProjectList />;
            case 'contact':
                return <Contact />;

            default:
                return <About />;
        }
    };

    return (
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}
export default Page;
