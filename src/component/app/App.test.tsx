import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders simple title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Crestron CH5 - React/i);
  expect(linkElement).toBeInTheDocument();
});
