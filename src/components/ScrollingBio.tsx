import React from 'react';
import { IBio } from './Bio';
import './ScrollingBio.scss';

const ScrollingBio = ({mission, edaBio, fullstackBio}: IBio) => (
  <div className='ScrollingBio'>
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
          <p>
            It is a period of <s>civil war</s> full stack engineering. In this space, {mission}
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

export default ScrollingBio;
