import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a header with my name', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Dave Trost/i);
  expect(headerElement).toBeInTheDocument();
});
