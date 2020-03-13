import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className='appContainer contactContainer'>
      <h3><span>{'<'}</span>Contact</h3>
      <div className='contactList'>
        <div className='Contact'>
          <a href='https://www.linkedin.com/in/dave-trost/'>
            <img 
              src='https://icons.iconarchive.com/icons/martz90/circle/512/linkedin-icon.png' 
              alt='LinkedIn' 
              title='Connect with me on LinkedIn' 
            />
          </a>
        </div>
        <div className='Contact'>
          <a href='https://github.com/DaveTrost'>
            <img 
              src='https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png' 
              alt='Github' 
              title='Follow me on Github'
            />
          </a>
        </div>
        <div className='Contact'>
          <a href='mailto:davetrost@gmail.com'>
            <img 
              src='https://techline.com/wp-content/uploads/2019/12/email-icon.png' 
              alt='Email' 
              title='Email me' 
            />
          </a>
        </div>
      </div>
      <h3><span>{'/>'}</span></h3>
    </div>
  );
}

export default Contact;
