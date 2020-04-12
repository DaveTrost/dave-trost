import React from 'react';
import { IBio } from './Bio';
import './StaticBio.scss';

const StaticBio = ({careerBio, personalBio}: IBio) => (
  <div className='StaticBio appContainer'>
    <p className='primary'>
      {careerBio}
    </p>
    <p className='secondary'>
      {personalBio}
    </p>
  </div>
);

export default StaticBio;
