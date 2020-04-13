import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { IisDisplayed } from '../types/types';
import { BracketL, BracketR, Slash } from './AngleBrackets';
import StaticBio from './StaticBio';
import ScrollingBio from './ScrollingBio';
import playPause from '../assets/play-pause.png';
import './Bio.scss';

export interface IBio {
  careerBio: string;
  personalBio: string;
}

const Bio = ({isDisplayed}: IisDisplayed) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .2 });
  const [scrolling, setScrolling] = useState(false);
  const toggleScrolling = () => setScrolling(!scrolling);

  const bioProps: IBio = {
    careerBio: `My past experience includes 10+ years of writing automation scripts in the semiconductor industry. 
      This work taught me strong problem solving skills, a focus on details and (especially) how to handle learning curves. 
      Each EDA software platform has its own proprietary scripting language and programming interface,
      and I often had to learn a new platform to keep up with technology needs.
      Over the course of mastering five of these platforms, 
      I got really good at research, reading the docs, experiments, and knowing how to ask for help.
      Now, I can handle any learning curve I need to.`,
    personalBio: `Outside of work, you might see me around town on one of my trusty bikes (trying to combat the progress of age). 
      Or you might find me at a frisbee golf course enjoying the pure flight of the disc - yes, I'm a big dork about it.
      If I'm home, I might be cooking up some food or a tasty cocktail (or two!). 
      Otherwise, I'm probably out on another of life's adventures. Who knows what's next? I'm just along for the ride!`,
  }

  return (
    <section 
      ref={ref} 
      className={`Bio ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
    >
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
