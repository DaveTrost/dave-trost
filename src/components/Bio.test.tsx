import React from 'react';
import { render } from '@testing-library/react';
import Bio from './Bio';

describe('Bio component', () => {
  it('renders some information about me', () => {
    const { getAllByText } = render(<Bio />);
    const headerElements = getAllByText(/Background/);
    expect(headerElements[0]).toBeInTheDocument();
  });
});
