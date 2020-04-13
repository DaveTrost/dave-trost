import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render } from '@testing-library/react';
import Mission from './Mission';

describe('Mission section', () => {
  it('renders important information', () => {
    const { getByText, getAllByText } = render(<Mission handleDoneTyping={() => 0} />);
    /* The Mission component goes through several setTimeout calls before completely rendering my name.
      However, if the component leaves the screen, it is programmed to immediately render all its info.
      Let's trick the component into rendering the title immediately for our test */
    mockAllIsIntersecting(false);
    const titleElement = getByText(/Dave/i);
    const insideElements = getAllByText(/software/i);
    const collaborateText = getByText(/collaborate/i);
    expect(titleElement).toBeInTheDocument();
    expect(insideElements[0]).toBeInTheDocument();
    expect(collaborateText).toBeInTheDocument();
  });
});
