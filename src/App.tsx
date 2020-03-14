import React from 'react';
// import Header from './components/Header';
// import ScrollingBio from './components/ScrollingBio';
import Bio from './components/Bio';
import ProjectList from './containers/ProjectList';
import SkillList from './containers/SkillList';
import Contact from './components/Contact';
import Footer from './components/FooterComp';
import './App.scss';

const App = () => (
  <div className='App'>
    <Bio />
    <ProjectList />
    <SkillList />
    <Contact />
    <Footer />
  </div>
);

export default App;
