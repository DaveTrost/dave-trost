import React from 'react';
import { useInView } from 'react-intersection-observer'
import { IOnClickHandler, IisDisplayed } from '../types/types';
import { BracketL, Slash, BracketR } from './AngleBrackets';
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-contact-icon.png';
import resumeIcon from '../assets/resume-icon.png';
import './ContactSection.scss';

interface IContactSection extends IisDisplayed{
  handleContactMe: IOnClickHandler;
}

function ContactSection({isDisplayed, handleContactMe}: IContactSection) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .2 });

  return (
    <div
      ref={ref} 
      className={`appContainer contactContainer ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
    >
      <h3 className='monospace'>
        <BracketL /> Contact
      </h3>
      <div className='contactList'>
        <div className='Contact'>
          <a href='https://www.linkedin.com/in/dave-trost/'>
            <img 
              src={linkedinIcon}
              alt='LinkedIn' 
              title='Connect with me on LinkedIn' 
            />
          </a>
        </div>
        <div className='Contact'>
          <a href='https://github.com/DaveTrost'>
            <img 
              src={githubIcon}
              alt='Github' 
              title='Follow me on Github'
            />
          </a>
        </div>
        <div className='Contact'>
          <button onClick={handleContactMe}>
            <img 
              src={emailIcon}
              alt='Email' 
              title='Email me' 
            />
          </button>
        </div>
        <div className='Contact'>
          <a href='https://drive.google.com/open?id=1_jeRCGP5GPn3FYWVS4lqLuoGbj_K5M-0'>
            <img 
              src={resumeIcon}
              alt='Resume' 
              title='My Resume' 
            />
          </a>
        </div>
      </div>
      <h3 className='monospace'>
        <Slash /><BracketR />
      </h3>
    </div>
  );
}

export default ContactSection;
