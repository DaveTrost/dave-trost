import React from 'react';
import { render } from '@testing-library/react';
import ScrollingBio from './ScrollingBio';
import { IBio } from './Bio';

const bioProps: IBio = {
  edaBio: 'EDA engineering',
  fullstackBio: 'software engineering'
}

const newRegex = (s: string) => new RegExp(s);

describe('ScrollingBio component', () => {
  it('renders my bio in the scrolling state', () => {
    const { getByText } = render(<ScrollingBio {...bioProps} />);
    const edaText = getByText(newRegex(bioProps.edaBio));
    const fullstackText = getByText(newRegex(bioProps.fullstackBio));
    expect(edaText).toBeInTheDocument();
    expect(fullstackText).toBeInTheDocument();
  });
});

