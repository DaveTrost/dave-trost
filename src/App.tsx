import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Dave Trost</h1>
        <nav>
          <h2>Full Stack</h2>
          <h2>Code Challenges</h2>
          <h2>Computer Engineering</h2>
        </nav>
      </header>
      <section>
        <p>
          Hi. I've been writing code in one language or another since 2006.
          I started a new adventure in coding in 2019 and plunged into the world of full stack software.
          Along the way, I've learned that certain aspects of coding are universal: 
          <span>The instant gratification when code goes from broken to fixed.</span>
          <span>The momentum and product quality that comes from sharing ideas and learnings among developers.</span>
          <span>Collaborative environments are fun!</span>
        </p>
        <p>
          Let's get coding!
        </p>
      </section>
      <section>
        <div>
          <p>
            New challenges are important to me and I'm having a lot of fun practicing with the core tools of the industry. 
            The projects below are the beginning of my explorations. 
          </p>
        </div>
        <div>
          <h3><a href='https://github.com/DaveTrost/mind-drift-ts-components'>MindDrift Breathing</a></h3>
          <p>
            A learning project for me to practice Typescript - converted from a prior JS project. (Credit for site architecture, graphics and animations to Abby Masters and Maeve Griffin)
          </p>
          <a href='https://mind-drift-breathing.netlify.com/'>Visit Site</a>
        </div>
        <div>
          <h2>Skills</h2>
          <a href='https://www.javascript.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' alt='Javascript' /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
