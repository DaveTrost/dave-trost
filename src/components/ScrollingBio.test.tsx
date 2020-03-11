import React from 'react';
import { render } from '@testing-library/react';
import ScrollingBio from './ScrollingBio';

describe('Scrolling Bio Content', () => {
  it('renders my bio in the initial state', () => {
    const { getByText } = render(<ScrollingBio />);
    const bio = getByText(/^Welcome/i);
    expect(bio).toBeInTheDocument();
  });
});

