import React, { useState } from 'react';
import Nav from './components/Nav';
import Links from './components/Links';
import Page from './components/Page';

// heroku https://sheltered-harbor-75048.herokuapp.com/ | https://git.heroku.com/sheltered-harbor-75048.git

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  console.log(currentPage)
  return (
    <div>

      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <footer>
        <Links></Links>
      </footer>
    </div>
  );
}

export default App;
