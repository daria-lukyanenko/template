import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the word "Edit"', () => {
  render(<App />);
  const editElement = screen.getByText(/save/i);
  expect(editElement).toBeInTheDocument();
});
