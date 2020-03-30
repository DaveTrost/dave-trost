import React from 'react';
import { render } from '@testing-library/react';
import Bio from './Bio';

describe('Bio component', () => {
  it('renders some information about me', () => {
    const { getByText } = render(<Bio />);
    const headerElement = getByText(/Hi, /);
    const paragraph = getByText(/tools for success/);
    const paragraph2 = getByText(/bring my full self/);
    expect(headerElement).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });
});
