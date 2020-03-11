import React from 'react';
import ScrollingBio from './components/ScrollingBio';
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
      <ScrollingBio />
      { false && 
        <section>
          <p>
            If there is a theme to this series, it is that certain aspects of <span className='strikeThrough'>the force</span> coding are universal: 
          </p>
          <ul>
            <li>We get an adrenaline boost when code goes from broken to fixed</li>
            <li>Code quality increases from sharing ideas, questions and learnings with a team</li>
            <li>Technical work is hard, collaboration is fun. We can build great things together!</li>
          </ul>
        </section>
      } 
      { false && 
        <section>
          <div>
            <p>
              New challenges are important to me. I'm having fun practicing with the tools of the industry.
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
      }
    </div>
  );
}

export default App;
