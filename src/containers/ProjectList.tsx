import React from 'react';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects';
import './ProjectList.scss';

const ProjectList = () => {
  const projects = projectsData.map((props: IProjectCard, i) => (
    <ProjectCard key={i} { ...props } />
  ));
  return (
    <div className='appContainer projectContainer'>
      <h3><span>{'<'}</span>Projects<span>{'>'}</span></h3>
      <div className='ProjectList'>
        {projects}
      </div>
      <h3><span>{'</'}</span>Projects<span>{'>'}</span></h3>
    </div>
  );
}

export default ProjectList;