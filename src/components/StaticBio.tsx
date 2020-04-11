import React from 'react';
import { IBio } from './Bio';
import './StaticBio.scss';

const StaticBio = ({edaBio, fullstackBio}: IBio) => (
  <div className='StaticBio appContainer'>
    <p className='primary'>
      {edaBio}
    </p>
    <p className='secondary'>
      {fullstackBio}
    </p>
  </div>
);

export default StaticBio;
