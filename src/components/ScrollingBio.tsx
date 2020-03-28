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
            It is a period of full stack engineering. {mission}
          </p>
          <p>
            In the last episode, {edaBio}
          </p>
          <p>
              In this episode, {fullstackBio}
          </p>
          <p>
            Let's work together!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ScrollingBio;
