import React, { useState } from 'react';
import './Bio.scss';
import './ScrollingBio.scss';

const Bio = () => {
  const [scrolling, setScrolling] = useState(false);
  const toggleScrolling = () => setScrolling(!scrolling);

  const mission = `I measure success by how I help people - customers and teammates alike. 
    I put myself in the customer's shoes to gain perspectives that guide my development. 
    My teammates and I have a shared work experience. Our work should be fun! 
    I strive to bring my full self to the team and to help others do the same. 
    I believe that big accomplishments are the result of great teamwork. `;
  const edaBio = `I worked my way to the top of EDA software engineering. 
    I specialized in automation scripts for circuit design software. `;
  const fullstackBio = `I apply my coding skills in the software engineering industry. 
    This industry is an area of great opportunity and significant challenge. 
    I bring with me tools of past success: a sharp eye for detail, strong problem solving & debugging skills, 
    a knowledge that no learning curve is too steep, mentoring abilities, and a lot of keyboard shortcuts `;

  const staticBio = (
    <div className='Bio'>
      <p className='primary'>
        <span>I am a full stack engineer: </span>
        {mission}
      </p>
      <p className='secondary'>
        <span>I am a career-changer: </span>
        In the past, {edaBio}
        Today, {fullstackBio}
      </p>
      <p>
        <span>Let's work together!</span>
      </p>
    </div>
  );

  const scrollingBio = (
    <section className='ScrollingBio'>
      <div className='appContainer relativeContainer'>
        {/* <p id='start'>
          Welcome to my coding adventures!
        </p>
        <h1 className='episodeTitle'>
          EPISODE MMXIX
        </h1>
        <sub>
          Full Stack Engineering
        </sub> */}
        <div id='titles'>
          <div id='titlecontent'>
            <p>It is a period of full stack engineering.</p>
            <p>{mission}</p>
            <p>In the last episode, {edaBio}</p>
            <p>In this episode, {fullstackBio}</p>
            <p>Let's work together!</p>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section className='appContainer bioContainer'>
      <h3>
        <span>{'<'}</span>Hi, I'm Dave<span>{'>'}</span>
        <img onClick={toggleScrolling} className='overlayTransparent' src='https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png' alt='play'/>
      </h3>
        {!scrolling && staticBio}
        {scrolling && scrollingBio}
      <h3><span>{'</'}</span>Hi<span>{'>'}</span></h3>
    </section>
  );
}

export default Bio;
