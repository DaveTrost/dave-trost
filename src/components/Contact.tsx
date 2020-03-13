import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className='appContainer contactContainer'>
      <h3>Contact</h3>
      <div className='contactList'>
        <div className='Contact'>
          <a href='https://www.linkedin.com/in/dave-trost/'>
            <img 
              src='https://icons.iconarchive.com/icons/martz90/circle/512/linkedin-icon.png' 
              alt='LinkedIn' 
              title='connect with me on LinkedIn' 
            />
          </a>
        </div>
        <div className='Contact'>
          <a href='https://github.com/DaveTrost'>
            <img 
              src='https://lh3.googleusercontent.com/proxy/gkZr4C4Vb7Dg-z6dctdlCcm0G-zlrOr1WUfE3W4izlkAeOUVhLGymrli6ElQMoCpeSXEjC-h44QpdXnVRp95OOyQDpNYv7k8iLJUvy2BO0mfBagVNBi5LegpjyS7XKZ5jHp6OgpPc-X2IauWMJ1hv9bbdt_FXjHAinlfV1asaNeim0KZXrvh6Al9sJcZ8FDE' 
              alt='Github' 
              title='follow me on Github'
            />
          </a>
        </div>
        <div className='Contact'>
          <a href='mailto:davetrost@gmail.com'>
            <img 
              src='https://techline.com/wp-content/uploads/2019/12/email-icon.png' 
              alt='email me' 
              title='email me' 
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
