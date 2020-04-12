import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render } from '@testing-library/react';
import ProjectList, { IProjectList } from './ProjectList';
import { exampleProject } from '../components/ProjectCard.test';

const testProjectList1: IProjectList = {
  isDisplayed: true,
  title: 'Project List 1',
  projects: [
    { ...exampleProject, title: 'projectABC' },
    { ...exampleProject, title: 'projectXYZ' },
  ],
};
const testProjectList2: IProjectList = {
  isDisplayed: true,
  title: 'Another Project List',
  projects: [
    { ...exampleProject, title: 'project2' },
    { ...exampleProject, title: 'project3' },
  ],
};

describe('Project List content', () => {
  it('contains the provided card data', () => {
    const { getByText, getAllByText } = render(
      <>
        <ProjectList { ...testProjectList1 } />
        <ProjectList { ...testProjectList2 } />
      </>
    );
    mockAllIsIntersecting(true);
    const titleElement1 = getAllByText(testProjectList1.title);
    const projectTitle1 = getByText(testProjectList1.projects[0].title);
    const titleElement2 = getAllByText(testProjectList2.title);
    const projectTitle2 = getByText(testProjectList2.projects[0].title);
    expect(titleElement1[0]).toBeInTheDocument();
    expect(projectTitle1).toBeInTheDocument();
    expect(titleElement2[0]).toBeInTheDocument();
    expect(projectTitle2).toBeInTheDocument();
  });
});
