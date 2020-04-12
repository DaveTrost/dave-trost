import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render } from '@testing-library/react';
import Bio from './Bio';

describe('Bio component', () => {
  it('renders some information about me', () => {
    const { getAllByText } = render(<Bio isDisplayed={true}/>);
    mockAllIsIntersecting(true);
    const headerElements = getAllByText(/About Me/);
    expect(headerElements[0]).toBeInTheDocument();
  });
});
