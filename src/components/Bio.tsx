import React from 'react';
import './Bio.scss';

function Bio() {
  return (
    <div className='appContainer bioContainer'>
      <h3><span>{'<'}</span>Hi, I'm Dave<span>{'>'}</span></h3>
      <div className='Bio'>
        <p className='primary'>
          <span>I am a full stack engineer: </span>
          I measure success by how I help people - customers and teammates alike. 
          I put myself in the customer's shoes to gain perspectives that guide my development. 
          My teammates and I have a shared work experience. Our work should be fun! 
          I strive to bring my full self to the team and to help others do the same. 
          I believe that big accomplishments are the result of great teamwork.
        </p>
        <p className='secondary'>
          <span>I am a career-changer: </span>
          In the past, I worked my way to the top of EDA software engineering. 
          I specialized in automation scripts for circuit design software. 
          Today, I apply my coding skills in the software engineering industry. 
          This industry is an area of great opportunity and significant challenge. 
          I bring with me tools of past success: a sharp eye for detail, strong problem solving & debugging skills, 
          a knowledge that no learning curve is too steep, mentoring abilities, and a lot of keyboard shortcuts! 
        </p>
        <p>
          <span>Let's work together!</span>
        </p>
      </div>
      <h3><span>{'</'}</span>Hi<span>{'>'}</span></h3>
    </div>
  );
}

export default Bio;
