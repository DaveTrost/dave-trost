import React from 'react';
import Header from './components/Header';
import ScrollingBio from './components/ScrollingBio';
import './App.scss';

const App = () => (
  <div className='App'>
    <div className='appContainer'>
      <Header />
      <ScrollingBio />
    </div>
  </div>
);

export default App;
