import React from 'react';
import { render } from '@testing-library/react';
import StaticBio from './StaticBio';
import { IBio } from './Bio';

const bioProps: IBio = {
  careerBio: 'EDA engineering',
  personalBio: 'software engineering'
}

const newRegex = (s: string) => new RegExp(s);

describe('StaticBio component', () => {
  it('renders my bio in the static state', () => {
    const { getByText } = render(<StaticBio {...bioProps} />);
    const edaText = getByText(newRegex(bioProps.careerBio));
    const fullstackText = getByText(newRegex(bioProps.personalBio));
    expect(edaText).toBeInTheDocument();
    expect(fullstackText).toBeInTheDocument();
  });
});

