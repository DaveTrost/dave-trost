import React from 'react';
import { IBio } from './Bio';
import './ScrollingBio.scss';

const toRomanNumeral = require('decimal-to-roman-converter');

const ScrollingBio = ({edaBio, fullstackBio}: IBio) => {
  const today = new Date();
  const year = toRomanNumeral(today.getFullYear());

  return (
    <div className='ScrollingBio'>
      <div className='appContainer relativeContainer'>
        <p className='preEpisode episodeLeadin'>
          The following is built purely with CSS and HTML (thank you Craig Buckler for sharing the possibility) ...
        </p>
        <h1 className='preEpisode episodeTitle'>
          CODE WARS
        </h1>
        <div id='titles'>
          <div id='titlecontent'>
            <p className='center'>
              EPISODE {year}
            </p>
            <p>
              It is a period of <s>civil war</s> the internet. A new mission calls: Full Stack Engineering.
            </p>
            <p>
              {edaBio} 
            </p>
            <p>
              {fullstackBio} 
            </p>
            <p>
              By our forces combined, we can the galaxy a better place!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBio;
