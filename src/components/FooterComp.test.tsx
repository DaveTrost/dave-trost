import React from 'react';
import { render } from '@testing-library/react';
import Footer from './FooterComp';

describe('Site Footer', () => {
  it('renders details about how the site was built', () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText(/by Dave Trost/i);
    expect(copyrightElement).toBeInTheDocument();
    const footerInfo = getByText(/powered by/i);
    expect(footerInfo).toBeInTheDocument();
  });  
});
