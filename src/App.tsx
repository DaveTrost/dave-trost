import React, { useState } from 'react';
import Mission from './components/Mission';
import ProjectList from './containers/ProjectList';
import { volunteerProjects, personalProjects } from './data/projects';
import SkillList from './containers/SkillList';
import Bio from './components/Bio';
import ContactSection from './containers/ContactSection';
import ContactForm from './components/ContactForm';
import Footer from './components/FooterComp';
import './App.scss';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  
  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);
  const handleDoneTyping = () => setTypingDone(true);
  
  return (
    <div className='App'>
      <ContactForm isDisplayed={showContactForm} handleClose={closeContactForm} />
      <Mission handleDoneTyping={handleDoneTyping} />
      <ProjectList isDisplayed={typingDone} title='Volunteer Work' projects={volunteerProjects} />
      <ProjectList isDisplayed={typingDone} title='Projects' projects={personalProjects} />
      <SkillList isDisplayed={typingDone} />
      <Bio isDisplayed={typingDone} />
      <ContactSection isDisplayed={typingDone} handleContactMe={openContactForm} />
      <Footer />
    </div>
  );
}

export default App;
