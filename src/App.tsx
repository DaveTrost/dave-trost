import React from 'react';
import Header from './components/Header';
import ScrollingBio from './components/ScrollingBio';
import ProjectList from './containers/ProjectList';
import './App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <ScrollingBio />
    <ProjectList />
  </div>
);

export default App;
