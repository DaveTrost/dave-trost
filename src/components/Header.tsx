import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className='Header'>
      <div className='appContainer'>
        <h1>Dave Trost</h1>
        <nav>
          <h2>Full Stack</h2>
          <h2>Code Challenges</h2>
          <h2>Computer Engineering</h2>
        </nav>
      </div>
    </header>
  );
}

export default Header;
