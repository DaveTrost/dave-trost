import React from 'react';
import './Mission.scss';
import { BracketL, BracketR, Slash } from './AngleBrackets';

const Mission = () => (
  <section className='Mission'>
    <div className='appContainer'>
      <h3 className='monospace'>
        <span className='typing addSpaceRight'>
          <BracketL />Hi, I'm <span className='cursor type-fast'> </span>
        </span>
        <span className='typing'>
          Dave<BracketR /> <span className='cursor type-slow'> </span>
        </span>
      </h3>
      <text>
        <p>
          I write software as an avenue to help others. 
          The software helps the customers, and that motivates my work.
          But if I'm honest with myself, software is about the connections I make while building it. 
          I love that development brings us together, and we collaborate - about the code, the product, its impact on lives ... 
          So if you code, or use software, or live life, I'm glad to help!
        </p>
      </text>
      <h3 className='monospace'>
        <BracketL /><Slash />
        Hi
        <BracketR />
      </h3>
    </div>
  </section>
);


export default Mission;
