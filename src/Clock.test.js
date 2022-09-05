import { render, screen } from '@testing-library/react';
import Clock from './Timer.js';

test('renders timer successfully', () => {
  render(<Clock />);
  
});

test('Displays Start button', () => {
    render(<Clock />);
    const linkElement = screen.getByText(/start/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Displays Lap button', () => {
    render(<Clock />);
    const linkElement = screen.getByText(/lap/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Displays Reset button', () => {
    render(<Clock />);
    const linkElement = screen.getByText(/reset/i);
    expect(linkElement).toBeInTheDocument();
  });