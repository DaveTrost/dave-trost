import React from 'react';
import { render } from '@testing-library/react';
import StaticBio from './StaticBio';
import { IBio } from './Bio';

const bioProps: IBio = {
  mission: 'help awesome people be awesome',
  edaBio: 'EDA engineering',
  fullstackBio: 'software engineering'
}

const newRegex = (s: string) => new RegExp(s);

describe('StaticBio component', () => {
  it('renders my bio in the static state', () => {
    const { getByText } = render(<StaticBio {...bioProps} />);
    const missionText = getByText(newRegex(bioProps.mission));
    const edaText = getByText(newRegex(bioProps.edaBio));
    const fullstackText = getByText(newRegex(bioProps.fullstackBio));
    expect(missionText).toBeInTheDocument();
    expect(edaText).toBeInTheDocument();
    expect(fullstackText).toBeInTheDocument();
  });
});

