import React from 'react';
import './Bio.scss';

function Bio() {
  return (
    <div className='appContainer bioContainer'>
      <h3>Hi, I'm Dave</h3>
      <div className='Bio'>
        <p className='primary'>
          I am a full stack engineer.
          I gauge success by the people I help - customers and teammates alike.
          I put myself in the customer's shoes and gain new perspectives to guide my development.
          My teammates and I have a shared work experience. Our work should be fun! 
          I strive to bring my full self to the team and to help others do the same. 
          I believe that big accomplishments are the result of great teamwork.
        </p>
        <p className='secondary'>
          I am a career-changer. 
          In the past, I worked my way to the top of EDA software engineering. 
          I specialized in circuit design software for radio-frequency semiconductors.
          Today, I apply my coding skills in the software engineering industry.
          This industry is an area of great opportunity and significant challenge. 
          I bring with me tools of past success: my work ethic, a sharp eye for detail, 
          a knowledge that no learning curve is too steep (and a lot of shortcut keys!)
        </p>
        <p>
          Let's work together!
        </p>
      </div>
    </div>
  );
}

export default Bio;
