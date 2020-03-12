import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard, { IProjectCard } from './ProjectCard';

const exampleProject: IProjectCard = {
  imageUrl: 'web address',
  title: 'mindDrift',
  description: `Meditation through guided breathing.`,
  sourceUrl: 'https://github.com/mindDrift',
  sourceUrl2: 'https://github.com/mindDrift',
  deployedUrl: 'https://mind-drift.netlify.com'
};

describe('Project Card', () => {
  it('renders all provided information', () => {
    const { getByText, getByAltText } = render(<ProjectCard { ...exampleProject } />);
    const titleElement = getByText(exampleProject.title);
    const imageElement = getByAltText(exampleProject.title);
    const descriptionText = getByText(exampleProject.description);
    const viewSourceButton = getByText('Code');
    const viewSourceButton2 = getByText('More Code');
    const visitSiteButton = getByText('Visit');
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(viewSourceButton).toBeInTheDocument();
    expect(viewSourceButton2).toBeInTheDocument();
    expect(visitSiteButton).toBeInTheDocument();
  });
});
