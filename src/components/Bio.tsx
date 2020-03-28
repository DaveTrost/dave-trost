import React, { useState } from 'react';
import StaticBio from './StaticBio';
import ScrollingBio from './ScrollingBio';
import playPause from '../assets/play-pause.png';
import './Bio.scss';

export interface IBio {
  mission: string;
  edaBio: string;
  fullstackBio: string;
}

const Bio = () => {
  const [scrolling, setScrolling] = useState(false);
  const toggleScrolling = () => setScrolling(!scrolling);

  const bioProps: IBio = {
    mission: `I measure success by how I help people - customers and teammates alike. 
      I put myself in the customer's shoes to gain perspectives that guide my development. 
      My teammates and I have a shared work experience. Our work should be fun! 
      I strive to bring my full self to the team and to help others do the same. 
      I believe that big accomplishments are the result of great teamwork. `,
    edaBio: `I worked my way to the top of EDA software engineering. 
      I specialized in automation scripts for circuit design software. `,
    fullstackBio: `I apply my coding skills in the software engineering industry. 
      This industry is an area of great opportunity and significant challenge. 
      I bring with me tools of past success: a sharp eye for detail, strong problem solving & debugging skills, 
      a knowledge that no learning curve is too steep, mentoring abilities, and a lot of keyboard shortcuts `
  }

  return (
    <section className='Bio'>
      <div className='appContainer'>
        <h3>
          <span>{'<'}</span>Hi, I'm Dave<span>{'>'}</span>
          <img 
            onClick={toggleScrolling} 
            className={scrolling ? 'pauseSprite' : 'playSprite'}
            src={playPause}
            alt='play'
            />
        </h3>
      </div>
      {scrolling ?
        <ScrollingBio {...bioProps} /> :
        <StaticBio {...bioProps} />
      }
      <div className='appContainer'>
        <h3>
          <span>{'</'}</span>Hi<span>{'>'}</span>
        </h3>
      </div>
    </section>
  );
}

export default Bio;
