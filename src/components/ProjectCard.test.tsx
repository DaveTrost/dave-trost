import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard, { IProjectCard } from './ProjectCard';

const exampleProject: IProjectCard = {
  imageUrl: 'web address',
  title: 'mindDrift',
  summary: `Meditation through guided breathing.`,
  details: 'all about the app',
  technologies: 'tech1, tech2, etc',
  sourceUrl: 'https://github.com/mindDrift-fe',
  sourceUrl2: 'https://github.com/mindDrift-be',
  deployedUrl: 'https://mind-drift.netlify.com'
};

describe('Project Card', () => {
  it('renders all provided information', () => {
    const { getByText, getByAltText } = render(<ProjectCard { ...exampleProject } />);
    const titleElement = getByText(exampleProject.title);
    const imageElement = getByAltText(exampleProject.title);
    const summaryText = getByText(exampleProject.summary);
    const viewSourceButton = getByText('Code');
    const viewSourceButton2 = getByText('More Code');
    const visitSiteButton = getByText('Visit');
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(viewSourceButton).toBeInTheDocument();
    expect(viewSourceButton2).toBeInTheDocument();
    expect(visitSiteButton).toBeInTheDocument();
  });
});
