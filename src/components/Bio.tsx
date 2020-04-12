import React, { useState } from 'react';
import { BracketL, BracketR, Slash } from './AngleBrackets';
import StaticBio from './StaticBio';
import ScrollingBio from './ScrollingBio';
import playPause from '../assets/play-pause.png';
import './Bio.scss';

export interface IBio {
  edaBio: string;
  fullstackBio: string;
}

const Bio = () => {
  const [scrolling, setScrolling] = useState(false);
  const toggleScrolling = () => setScrolling(!scrolling);

  const bioProps: IBio = {
    edaBio: `My past experiences include 13 years of writing automation scripts in the semiconductor industry. 
      This work taught me strong problem solving skills, a focus on details and (especially) how to handle learning curves. 
      Each EDA software platform had its own proprietary scripting language and programming interface. 
      I became an expert in five of these platforms to keep up with technology needs.
      I got really good at research, reading the docs, experiments, and knowing how to ask for help.
      Now, I can handle any learning curve I need to.`,
    fullstackBio: `I have been through some learning curves in the software industry.
      I learned the MERN stack through the training program at Alchemy Code Lab. 
      I am self-taught in Typescript for frontend and backend work. 
      I'm also self taught in the Flask framework for Python servers.
      I'm ready to keep the learning going, so please contact me with questions, feedback, and ideas.`
  }

  return (
    <section className='animated fadeInUp Bio'>
      <div className='appContainer'>
        <h3 className='monospace'>
          <BracketL />Background<BracketR />
        </h3>
        <h3 onClick={toggleScrolling} className='controls'>
          <figure>
            <img 
              className={scrolling ? 'pauseSprite' : 'playSprite'}
              src={playPause}
              alt={scrolling ? 'pause button' : 'play button'}
            />
            <figcaption>
              {scrolling? 'Close Animation' : 'Play as Animation'}
            </figcaption>
          </figure>
        </h3>
      </div>
      {scrolling ?
        <ScrollingBio {...bioProps} /> :
        <StaticBio {...bioProps} />
      }
      <div className='appContainer'>
        <h3 className='monospace'>
          <BracketL /><Slash />Background<BracketR />
        </h3>
      </div>
    </section>
  );
}

export default Bio;
