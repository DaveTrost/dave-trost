import React, { useState } from 'react';
import Mission from './components/Mission';
import Bio from './components/Bio';
import ProjectList from './containers/ProjectList';
import { volunteerProjects, personalProjects } from './data/projects';
import SkillList from './containers/SkillList';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import Footer from './components/FooterComp';
import './App.scss';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  return (
    <div className='App'>
      <ContactForm isDisplayed={showContactForm} handleClose={closeContactForm} />
      <Mission />
      <ProjectList title='Volunteer Work' projects={volunteerProjects} />
      <ProjectList title='Projects' projects={personalProjects} />
      <SkillList />
      <Bio />
      <ContactSection handleContactMe={openContactForm} />
      <Footer />
    </div>
  );
}

export default App;
