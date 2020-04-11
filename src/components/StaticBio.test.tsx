import React from 'react';
import { render } from '@testing-library/react';
import StaticBio from './StaticBio';
import { IBio } from './Bio';

const bioProps: IBio = {
  edaBio: 'EDA engineering',
  fullstackBio: 'software engineering'
}

const newRegex = (s: string) => new RegExp(s);

describe('StaticBio component', () => {
  it('renders my bio in the static state', () => {
    const { getByText } = render(<StaticBio {...bioProps} />);
    const edaText = getByText(newRegex(bioProps.edaBio));
    const fullstackText = getByText(newRegex(bioProps.fullstackBio));
    expect(edaText).toBeInTheDocument();
    expect(fullstackText).toBeInTheDocument();
  });
});

