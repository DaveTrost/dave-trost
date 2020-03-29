import React from 'react';
import { render } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('Contact Section component', () => {
  it('renders 3 links to contact me', () => {
    const { getByAltText } = render(<ContactSection />);
    const contactOne = getByAltText('LinkedIn');
    const contactTwo = getByAltText('Github');
    const contactThree = getByAltText('Email');
    expect(contactOne).toBeInTheDocument();
    expect(contactTwo).toBeInTheDocument();
    expect(contactThree).toBeInTheDocument();
  });  
});
