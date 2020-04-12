import React from 'react';
import { IBio } from './Bio';
import './ScrollingBio.scss';

const toRomanNumeral = require('decimal-to-roman-converter');
const episodeLeadIns = [
  `The following is built purely with CSS and HTML (thank you Craig Buckler for sharing the possibility) ...`,
  `This following preview is rated 'C' for cheesy and is recommended for all audiences ...`,
  `In a career change not so long ago and an industry not so far far away ...`,
];

const ScrollingBio = ({careerBio, personalBio}: IBio) => {
  const today = new Date();
  const year = toRomanNumeral(today.getFullYear());
  const leadInText = episodeLeadIns[today.getMilliseconds() % 3];

  return (
    <div className='ScrollingBio'>
      <div className='appContainer relativeContainer'>
        <p className='preEpisode episodeLeadin'>
          {leadInText}
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
              {careerBio} 
            </p>
            <p>
              When I'm not saving the galaxy with my technical skills, 
              I have a few things that keep me busy. {personalBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBio;
