import React from 'react';
import { render } from '@testing-library/react';
import ScrollingBio from './ScrollingBio';
import { IBio } from './Bio';

const bioProps: IBio = {
  careerBio: 'EDA engineering',
  personalBio: 'disc golf'
}

const newRegex = (s: string) => new RegExp(s);

describe('ScrollingBio component', () => {
  it('renders my bio in the scrolling state', () => {
    const { getByText } = render(<ScrollingBio {...bioProps} />);
    const edaText = getByText(newRegex(bioProps.careerBio));
    const fullstackText = getByText(newRegex(bioProps.personalBio));
    expect(edaText).toBeInTheDocument();
    expect(fullstackText).toBeInTheDocument();
  });
});

