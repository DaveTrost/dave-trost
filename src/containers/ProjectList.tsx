import React from 'react';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';
import { BracketL, BracketR, Slash } from '../components/AngleBrackets';
import './ProjectList.scss';

interface IProjectList {
  title: string;
  projects: IProjectCard[];
}

const ProjectList = ({title, projects}: IProjectList) => {
  const projectCards = projects.map((props: IProjectCard, i) => (
    <ProjectCard key={i} { ...props } />
  ));
  return (
    <div className='appContainer projectContainer'>
      <h3 className='monospace'>
      <BracketL />{title}<BracketR />
      </h3>
      <div className='ProjectList'>
        {projectCards}
      </div>
      <h3 className='monospace'>
        <BracketL /><Slash />{title}<BracketR />
      </h3>
    </div>
  );
}

export default ProjectList;