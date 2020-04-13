import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { BracketL, BracketR, Slash } from './AngleBrackets';
import { useTypingAppearance } from './useTypingAppearanceHook';
import './Mission.scss';

const message = `Hi, I'm Dave`;
const predictiveWords = ['', '', '', '', '', '', '', '', '', 'Detailed', 'Darn Helpful', 'Dave', 'Dave'];
const baselineTypingRate = 300;  // in milliseconds
const predictiveTypingRate = 900;  // in milliseconds

export interface IMission {
  handleDoneTyping: Function;
}

const Mission = ({handleDoneTyping}: IMission) => {
  const [ref, inView, entry] = useInView({ threshold: .8 });
  const [
    isTyping, 
    showOpeningBracket, 
    displayText, 
    predictiveText, 
    showClosingBracket, 
    endTypingAnimation
  ] = useTypingAppearance(message, predictiveWords, baselineTypingRate, predictiveTypingRate, handleDoneTyping);
  
  /* The useEffect below is a custom bit of logic that mimics triggerOnce, but inverted.
    The useInView({triggerOnce}) modifier is sensitized to fire once on a component entering the viewport.
    However, we want to fire one time if the Mission component **exits** the viewport, so this custom thing is needed.
  */
  useEffect(() => {
    if(entry && !inView) endTypingAnimation();
  }, 
  [entry, inView, endTypingAnimation]);

  return (
    <section ref={ref} className='Mission'>
      <div className='appContainer'>
        <h3 className='monospace'>
          {showOpeningBracket && <BracketL />}
          {displayText}
          {showClosingBracket && <BracketR />}
          <span className={isTyping ? 'cursor' : ''}></span>
          <span className={predictiveText ? 'predictive' : 'hiddenComponent'}>{predictiveText}</span>
        </h3>
        <p className={`${!isTyping ? 'animated fadeIn fast' : 'hiddenComponent'}`}>
          I write software as an avenue to help others. 
          The software helps the customers, and that motivates my work.
          And it's more than that. 
          For me, software is about the connections I make while building it. 
          I love how development brings people together and offers a platform for us to collaborate - 
          about the code, the product, and its impact on lives. 
          So if you code, or use software, or live life, I'm glad to help! 
        </p>
        <h3 className={`monospace ${!isTyping ? 'animated fadeIn fast' : 'hiddenComponent'}`}>
          <BracketL /><Slash />
          Hi
          <BracketR />
        </h3>
      </div>
    </section>
  );
}

export default Mission;
