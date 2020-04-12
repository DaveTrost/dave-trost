import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render } from '@testing-library/react';
import Mission from './Mission';

describe('Mission section', () => {
  it('renders important information', () => {
    const { getByText, getAllByText } = render(<Mission handleDoneTyping={() => 0} />);
    mockAllIsIntersecting(true);
    const titleElement = getByText(/Dave/i);
    const insideElements = getAllByText(/software/i);
    const collaborateText = getByText(/collaborate/i);
    expect(titleElement).toBeInTheDocument();
    expect(insideElements[0]).toBeInTheDocument();
    expect(collaborateText).toBeInTheDocument();
  });
});
