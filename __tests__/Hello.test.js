import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';
import '@testing-library/jest-dom';

test('renders hello world', () => {
  render(<Hello />);
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
}); 