import React, { useState } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
 // import Header from './components/Header';
import Bio from './components/Bio';
import ProjectList from './containers/ProjectList';
import SkillList from './containers/SkillList';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import Footer from './components/FooterComp';
import './App.scss';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    setShowContactForm(true);
    const modalEle = document.querySelector('.ContactForm');
    if(modalEle) disableBodyScroll(modalEle);
  }
  const closeContactForm = () => {
    setShowContactForm(false);
    clearAllBodyScrollLocks();
  }

  return (
    <div className='App'>
      <ContactForm display={showContactForm} handleCancel={closeContactForm} />
      <Bio />
      <ProjectList />
      <SkillList />
      <ContactSection handleContactMe={openContactForm} />
      <Footer />
    </div>
  );
}

export default App;
