import React from 'react';
import './FooterComp.scss';

function FooterComp() {
  return (
    <footer className='FooterComp'>
      <div className='appContainer'>
        <p>
          &copy; 2020 by Dave Trost
        </p>
        <p>
          Powered by Typescript, React, Bootstrap and tortilla chips. 
          Color palette designed to mimic the 'dark+' theme in VS Code.
        </p>
      </div>
    </footer>
  );
}

export default FooterComp;
