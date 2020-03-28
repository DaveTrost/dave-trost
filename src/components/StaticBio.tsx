import React from 'react';
import { IBio } from './Bio';
import './StaticBio.scss';

const StaticBio = ({mission, edaBio, fullstackBio}: IBio) => (
  <div className='StaticBio'>
    <p className='primary'>
      <span>I am a full stack engineer: </span>
      {mission}
    </p>
    <p className='secondary'>
      <span>I am a career-changer: </span>
      In the past, {edaBio}
      Today, {fullstackBio}
    </p>
    <p>
      <span>Let's work together!</span>
    </p>
  </div>
);

export default StaticBio;