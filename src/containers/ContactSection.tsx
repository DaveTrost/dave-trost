import React from 'react';
import { useInView } from 'react-intersection-observer'
import { IOnClickHandler, IisDisplayed } from '../types/types';
import { BracketL, Slash, BracketR } from '../components/AngleBrackets';
import { Contact, TContact } from '../components/Contact';
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-contact-icon.png';
import resumeIcon from '../assets/resume-icon.png';
import './ContactSection.scss';

interface IContactList {
  title: string;
  contacts: TContact[];
}
function ContactList({title, contacts}: IContactList) {
  const contactElements = contacts.map((props: TContact, i) => (
    <Contact key={i} { ...props } />
  ));
  return (
    <>
      <h3 className='monospace'>
        <BracketL />
        {title}
      </h3>
      <div className='contactList'>
        {contactElements}
      </div>
      <h3 className='monospace'>
        <Slash /><BracketR />
      </h3>
    </>
  )
}

interface IContactSection extends IisDisplayed{
  handleContactMe: IOnClickHandler;
}  
function ContactSection({isDisplayed, handleContactMe}: IContactSection) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .2 });

  return (
    <div ref={ref}>
      <div
        className={`appContainer contactContainer ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
      >
        <ContactList title='Contact Me' contacts=
          {[
            {
              link: 'https://www.linkedin.com/in/dave-trost/',
              src: linkedinIcon,
              alt: 'LinkedIn',
              title: 'Connect with me on LinkedIn',
            }, {
              link: 'https://github.com/DaveTrost',
              src: githubIcon,
              alt: 'Github',
              title: 'Follow me on Github',
            }, {
              action: handleContactMe,
              src: emailIcon,
              alt: 'Email',
              title: 'Email me',
            }
          ]}
        />
      </div>
      <div
        className={`appContainer contactContainer ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
      >
        <ContactList title='My Resume' contacts=
          {[{
            link: 'https://drive.google.com/open?id=1_jeRCGP5GPn3FYWVS4lqLuoGbj_K5M-0',
            src: resumeIcon,
            alt: 'Resume',
            title: 'My Resume',
          }]}
        />
      </div>
    </div>
  );
}

export default ContactSection;
