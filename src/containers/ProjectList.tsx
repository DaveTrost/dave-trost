import React from 'react';
import ProjectCard, { IProjectCard } from '../components/ProjectCard';

const projects: IProjectCard[] = [{
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgSeQQ9jv82BGb_RLI2gA0mJBjJwbdgjLXEgTXF_N8xDLnKKrd',
  title: 'mindDrift',
  description: `Meditation through guided breathing.`,
  sourceUrl: 'https://github.com/mindDrift',
  deployedUrl: 'https://mind-drift.netlify.com'
}];

const ProjectList = () => {
  const cards = projects.map((props: IProjectCard, i) => (
    <ProjectCard key={i} { ...props } />
  ));
  return (
    <div className='appContainer'>
      {cards}
    </div>
  );
}

export default ProjectList;