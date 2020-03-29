import React from 'react';
import './Contact.scss';
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-contact-icon.png';
import resumeIcon from '../assets/resume-icon.webp';


function Contact() {
  return (
    <div className='appContainer contactContainer'>
      <h3><span>{'<'}</span>Contact</h3>
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
          <a href='mailto:davetrost@gmail.com'>
            <img 
              src={emailIcon}
              alt='Email' 
              title='Email me' 
            />
          </a>
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
      <h3><span>{'/>'}</span></h3>
    </div>
  );
}

export default Contact;
