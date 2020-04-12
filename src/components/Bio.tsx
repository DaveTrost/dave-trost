import React, { useState } from 'react';
import { BracketL, BracketR, Slash } from './AngleBrackets';
import StaticBio from './StaticBio';
import ScrollingBio from './ScrollingBio';
import playPause from '../assets/play-pause.png';
import './Bio.scss';

export interface IBio {
  careerBio: string;
  personalBio: string;
}

const Bio = () => {
  const [scrolling, setScrolling] = useState(false);
  const toggleScrolling = () => setScrolling(!scrolling);

  const bioProps: IBio = {
    careerBio: `My past experience includes 10+ years of writing automation scripts in the semiconductor industry. 
      This work taught me strong problem solving skills, a focus on details and (especially) how to handle learning curves. 
      Each EDA software platform had its own proprietary scripting language and programming interface,
      and I often had to learn a new platform to keep up with technology needs.
      Over the course of mastering five of these platforms, 
      I got really good at research, reading the docs, experiments, and knowing how to ask for help.
      Now, I can handle any learning curve I need to.`,
    personalBio: `Outside of work, you might see me around town on my trusty bike trying to combat the aging process. 
      Or you might find me at a frisbee golf course, enjoying the pure flight of the disc. (Yes, I'm a big dork about it.)
      If I'm at home, chances are I'll be cooking up some food for the kids and tasty cocktails for my wife and myself. 
      Otherwise, I must be out on another of life's adventures. Who knows what's next? I'm just along for the ride!`,
  }

  return (
    <section className='animated fadeInUp Bio'>
      <div className='appContainer'>
        <h3 className='monospace'>
          <BracketL />About Me<BracketR />
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
          <BracketL /><Slash />About Me<BracketR />
        </h3>
      </div>
    </section>
  );
}

export default Bio;
