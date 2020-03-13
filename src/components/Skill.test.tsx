import React from 'react';
import { render } from '@testing-library/react';
import Skill, { ISkill } from './Skill';

const exampleSkill: ISkill = {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  title: 'ReactJS',
  infoUrl: 'https://reactjs.org/'
};

describe('Skill Icon', () => {
  it('renders all provided information', () => {
    const { getByAltText } = render(<Skill {...exampleSkill} />);
    const imageElement = getByAltText(exampleSkill.title);

    expect(imageElement).toBeInTheDocument();
  });
});
