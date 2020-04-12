import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { BracketL, BracketR, Slash } from './AngleBrackets';
import './Mission.scss';

const typingInSeconds = 7;
const typingTimeout = typingInSeconds*1000 + 100;
const enterAfterTyping = `animated fadeIn fast delay-${typingInSeconds}s`;

export interface IMission {
  handleDoneTyping: Function;
}

const Mission = ({handleDoneTyping}: IMission) => {
  const [ref, inView, entry] = useInView({ threshold: .8 });
  
  /* The useEffect below is a custom bit of logic that mimics triggerOnce, but inverted.
    The useInView({triggerOnce}) modifier is sensitized to fire once on a component entering the viewport.
    However, we want to fire one time if the Mission component **exits** the viewport, so this custom thing is needed.
  */
  useEffect(() => {
    if(entry && !inView) handleDoneTyping();
    setTimeout(() => handleDoneTyping(), typingTimeout);
  }, [entry, inView, handleDoneTyping]);

  return (
    <section ref={ref} className='Mission'>
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
}

export default Mission;
