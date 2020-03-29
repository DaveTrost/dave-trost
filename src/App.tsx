import React from 'react';
// import Header from './components/Header';
import Bio from './components/Bio';
import ProjectList from './containers/ProjectList';
import SkillList from './containers/SkillList';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterComp';
import './App.scss';

const App = () => (
  <div className='App'>
    <Bio />
    <ProjectList />
    <SkillList />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
