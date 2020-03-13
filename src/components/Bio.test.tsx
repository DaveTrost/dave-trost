import React from 'react';
import { render } from '@testing-library/react';
import Bio from './Bio';

describe('About Me section', () => {
  it('renders some information about me', () => {
    const { getByText } = render(<Bio />);
    const headerElement = getByText(/Hi, /);
    const paragraph = getByText(/past success/);
    const paragraph2 = getByText(/shared work experience/);
    expect(headerElement).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });  
});
