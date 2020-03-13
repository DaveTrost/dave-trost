import React from 'react';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';
import './ProjectList.scss';

// 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/dwellingly.png'

const projects: IProjectCard[] = [
  {
    title: 'mindDrift',
    imageUrl: 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/mind-drift.gif',
    description: `Meditation through guided breathing.`,
    sourceUrl: 'https://github.com/mindDrift',
    deployedUrl: 'https://mind-drift.netlify.com'
  },
  {
    title: 'Connect4 AI',
    imageUrl: 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/connect4.png',
    description: `A Connect4 game played against a computerized AI or against another human.`,
    sourceUrl: 'https://www.npmjs.com/package/connect4-ai',
    sourceUrl2: 'https://github.com/DaveTrost/connect4-ui',
    deployedUrl: 'https://a-connect4-game.netlify.com/'
  },
  {
    title: 'MAZE API',
    imageUrl: 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/maze-api.png',
    description: `A public, RESTful API serving maze puzzles`,
    sourceUrl: 'https://github.com/maze-api',
    sourceUrl2: 'https://github.com/maze-api',
    deployedUrl: 'https://maze-api.herokuapp.com/'
  },
  {
    title: 'Whiskepedia',
    imageUrl: 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/whiskepedia.gif',
    description: `Explore hundreds of bottles of whiskey according to their flavor profiles.`,
    sourceUrl: 'https://github.com/team-whiskepedia/whiskepedia',
    deployedUrl: 'https://whiskepedia.herokuapp.com/index.html'
  },
  {
    title: 'mindDrift TS',
    imageUrl: 'https://github.com/DaveTrost/dave-trost/raw/master/src/assets/mind-drift-TS.gif',
    description: `The same guided breathing app, re-written with Typescript.`,
    sourceUrl: 'https://github.com/DaveTrost/mind-drift-ts-components',
    sourceUrl2: 'https://github.com/DaveTrost/mind-drift-be-ts',
  },
];

const ProjectList = () => {
  const cards = projects.map((props: IProjectCard, i) => (
    <ProjectCard key={i} { ...props } />
  ));
  return (
    <div className='appContainer projectContainer'>
      <h3><span>{'<'}</span>Projects<span>{'>'}</span></h3>
      <div className='ProjectList'>
        {cards}
      </div>
      <h3><span>{'</'}</span>Projects<span>{'>'}</span></h3>
    </div>
  );
}

export default ProjectList;