import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import Mission, { typingAnimationDuration } from './components/Mission';
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
  const [showApp, setShowApp] = useState(false);
  const [ref, inView, entry] = useInView({ threshold: .8 });
  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  useEffect(() => {
    if(entry && !inView) setShowApp(true);
    setTimeout(() => setShowApp(true), typingAnimationDuration*1000 + 100);
  }, [entry, inView]);

  return (
    <div className='App'>
      <ContactForm isDisplayed={showContactForm} handleClose={closeContactForm} />
      <div ref={ref}>
        <Mission />
      </div>
      {showApp && 
        <>
          <ProjectList title='Volunteer Work' projects={volunteerProjects} />
          <ProjectList title='Projects' projects={personalProjects} />
          <SkillList />
          <Bio />
          <ContactSection handleContactMe={openContactForm} />
          <Footer />
        </>
      }
      {!showApp && 
        <div className='fullHeight'></div>
      }
    </div>
  );
}

export default App;
