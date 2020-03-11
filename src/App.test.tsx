import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Site Header', () => {
  it('renders my name in the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText('Dave Trost');
    expect(headerElement).toBeInTheDocument();
  });
  it('renders 3 categories in the navigation section', () => {
    const { getByText } = render(<App />);
    const fullstackNav = getByText('Full Stack');
    expect(fullstackNav).toBeInTheDocument();
    const codeChallengesNav = getByText('Code Challenges');
    expect(codeChallengesNav).toBeInTheDocument();
    const computerEngineeringNav = getByText('Computer Engineering');
    expect(computerEngineeringNav).toBeInTheDocument();
  });
});

describe('Site Content', () => {
  it('renders my bio in the initial state', () => {
    const { getByText } = render(<App />);
    const bio = getByText(/^Hi\./i);
    const bioText = bio.textContent || '';
    expect(bio).toBeInTheDocument();
    expect(bioText.split(' ').length).toBeGreaterThan(50);
  });
});

