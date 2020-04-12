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
  const [ref, inView, entry] = useInView({ threshold: .8 });
  const [showContactForm, setShowContactForm] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  /* The useEffect below mimics triggerOnce for the case of exiting the viewport
    Typically, the useInView({triggerOnce}) modifier is used for this case, but it is sensitized to entering the viewport,
    and we want to sensitize to the Mission component **exiting** the viewport
  */
  useEffect(() => {
    if(entry && !inView) setTypingDone(true);
    setTimeout(() => setTypingDone(true), typingAnimationDuration*1000 + 100);
  }, [entry, inView]);

  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  return (
    <div className='App'>
      <ContactForm isDisplayed={showContactForm} handleClose={closeContactForm} />
      {/* This is a hack. Instead, the InView component should be used to wrap the Mission component; 
        and it needs a callback that will execute setTypingDone */}
      <div ref={ref}>
        <Mission />
      </div>
      <ProjectList isDisplayed={typingDone} title='Volunteer Work' projects={volunteerProjects} />
      <ProjectList isDisplayed={typingDone} title='Projects' projects={personalProjects} />
      <SkillList />
      <Bio />
      <ContactSection handleContactMe={openContactForm} />
      <Footer />
    </div>
  );
}

export default App;
