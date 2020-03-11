import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Site Header', () => {
  it('renders my name in the header', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('Dave Trost');
    expect(headerElement).toBeInTheDocument();
  });
  
  it('renders 3 categories in the navigation section', () => {
    const { getByText } = render(<Header />);
    const fullstackNav = getByText('Full Stack');
    expect(fullstackNav).toBeInTheDocument();
    const codeChallengesNav = getByText('Code Challenges');
    expect(codeChallengesNav).toBeInTheDocument();
    const computerEngineeringNav = getByText('Computer Engineering');
    expect(computerEngineeringNav).toBeInTheDocument();
  });
});
