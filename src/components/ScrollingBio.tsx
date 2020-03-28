import React from 'react';
import { IBio } from './Bio';
import './ScrollingBio.scss';

const toRomanNumeral = require('decimal-to-roman-converter');

const ScrollingBio = ({mission, edaBio, fullstackBio}: IBio) => {
  const today = new Date();
  const year = toRomanNumeral(today.getFullYear());

  return (
    <div className='ScrollingBio'>
      <div className='appContainer relativeContainer'>
        {/* <p className='episodeLeadin'>
          In a blog post by Craig Buckler, I discovered some "force"ful CSS techniques. They are on display here ...
        </p> */}
        <h1 className='episodeTitle'>
          CODE WARS
        </h1>
        <div id='titles'>
          <div id='titlecontent'>
            <p className='center'>
              EPISODE {year}
            </p>
            <p>
              It is a period of <s>civil war</s> software engineering. In this space, {mission}
            </p>
            <p>
              In the last episode, {edaBio}
            </p>
            <p>
              In this episode, {fullstackBio} (and some Jedi mind tricks!)
            </p>
            <p>
              Now let's go save the galaxy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBio;
