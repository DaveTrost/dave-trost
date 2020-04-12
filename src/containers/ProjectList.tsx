import React from 'react';
import { useInView } from 'react-intersection-observer'
import { IisDisplayed } from '../types/types';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';
import { BracketL, BracketR, Slash } from '../components/AngleBrackets';
import './ProjectList.scss';

export interface IProjectList extends IisDisplayed {
  title: string;
  projects: IProjectCard[];
}

const ProjectList = ({isDisplayed, title, projects}: IProjectList) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .1 });

  const projectCards = projects.map((props: IProjectCard, i) => (
    <ProjectCard key={i} { ...props } />
  ));

  return (
    <div 
      ref={ref} 
      className={`appContainer projectContainer ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
    >
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