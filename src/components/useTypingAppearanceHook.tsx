import { useState, useEffect, useCallback } from 'react';

export function useTypingAppearance(
  message: string, 
  predictiveWords: string[], 
  baselineTypingRate: number, 
  predictiveTypingRate: number, 
  handleDoneTyping: Function
): [boolean, boolean, string, string, boolean, Function] {
  const [isTyping, setIsTyping] = useState(true);
  const [phase, setPhase] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  const endTypingAnimation = useCallback(() => {
    handleDoneTyping();
    setPhase(3);
    setMsgIndex(message.length);
    setIsTyping(false);
  }, 
  [handleDoneTyping, message]);

  useEffect(() => {
    if(phase === 2 && msgIndex < message.length) {
      const isValidPredictiveWord = msgIndex >= 0 && predictiveWords[msgIndex] !== '';
      const timer = isValidPredictiveWord ? predictiveTypingRate : baselineTypingRate;
      const timeout = setTimeout(() => {
        setMsgIndex(msgIndex + 1)
      }, timer);
      return () => clearTimeout(timeout);
    }
    else if(phase <= 3) {
      const timeout = setTimeout(() => {
        setPhase(phase + 1)
        if(phase === 3) endTypingAnimation();
      }, baselineTypingRate);
      return () => clearTimeout(timeout);
    }
  },
  [phase, msgIndex, endTypingAnimation, message.length, predictiveWords, predictiveTypingRate, baselineTypingRate]);

  const showOpeningBracket = (phase >= 1);
  const displayText = (phase >= 2) ? message.substring(0, msgIndex) : '';
  const predictiveText = (phase === 2) ? predictiveWords[msgIndex] : '';
  const showClosingBracket = (phase >= 3);

  return [isTyping, showOpeningBracket, displayText, predictiveText, showClosingBracket, endTypingAnimation];
}
