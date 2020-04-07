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
      I put myself in the customer's shoes, and those perspectives guide my development. 
      I strive to bring my full self to the team and to help others do the same. 
      I believe great accomplishments stem from even greater teamwork.
      We can help people by being people 🙂 `,
    edaBio: `I worked my way to the top of EDA software engineering. 
      I specialized in automation scripts for circuit design software. `,
    fullstackBio: `software engineering provides new challenge and opportunity. 
      I have the tools for success: an eye for detail, problem solving, mentoring, 
      the knowledge that no learning curve is too steep `
  }

  return (
    <section className='Bio'>
      <div className='appContainer'>
        <h3>
          <span>{'<'}</span>Hi, I'm Dave<span>{'>'}</span>
          <h1 className='type'>Hi, I'm&nbsp;<span>&nbsp;</span></h1>
          <h1 className='type-slowly'>Dave&nbsp;<span>&nbsp;</span></h1>
        </h3>
        <h3>
          <img 
            onClick={toggleScrolling} 
            className={scrolling ? 'pauseSprite' : 'playSprite'}
            src={playPause}
            alt={scrolling ? 'pause button' : 'play button'}
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
