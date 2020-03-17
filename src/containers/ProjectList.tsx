import React from 'react';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';
import projects from '../data/projects';
import './ProjectList.scss';

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