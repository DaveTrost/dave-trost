import React from 'react';
import './Mission.scss';
import { BracketL, BracketR, Slash } from './AngleBrackets';

export const typingAnimationDuration = 7;
const enterAfterTyping = `animated fadeIn fast delay-${typingAnimationDuration}s`;

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
      <p className={`${enterAfterTyping}`}>
        I write software as an avenue to help others. 
        The software helps the customers, and that motivates my work.
        And it's more than that. 
        For me, software is about the connections I make while building it. 
        I love how development brings people together and offers a platform for us to collaborate - 
        about the code, the product, and its impact on lives. 
        So if you code, or use software, or live life, I'm glad to help! 
      </p>
      <h3 className={`monospace ${enterAfterTyping}`}>
        <BracketL /><Slash />
        Hi
        <BracketR />
      </h3>
    </div>
  </section>
);


export default Mission;
