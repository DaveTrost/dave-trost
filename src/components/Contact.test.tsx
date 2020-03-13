import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Me section', () => {
  it('renders 3 links to contact me', () => {
    const { getByAltText } = render(<Contact />);
    const contactOne = getByAltText('LinkedIn');
    const contactTwo = getByAltText('Github');
    const contactThree = getByAltText('Email');
    expect(contactOne).toBeInTheDocument();
    expect(contactTwo).toBeInTheDocument();
    expect(contactThree).toBeInTheDocument();
  });  
});
