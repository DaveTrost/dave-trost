import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Site Header', () => {
  it('renders my name in the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Dave Trost/i);
    expect(headerElement).toBeInTheDocument();
  });
  it('renders 3 categories in the navigation section', () => {
    const { getByText } = render(<App />);
    const fullstackNav = getByText(/Full Stack/i);
    expect(fullstackNav).toBeInTheDocument();
    const codeChallengesNav = getByText(/Code Challenges/i);
    expect(codeChallengesNav).toBeInTheDocument();
    const computerEngineeringNav = getByText(/Computer Engineering/i);
    expect(computerEngineeringNav).toBeInTheDocument();
  });
});
