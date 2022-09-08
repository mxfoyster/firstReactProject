import { render, screen } from '@testing-library/react';
import Clock from './Timer.js';

test('renders timer successfully', () => {
  render(<Clock />);
  
});

test('Displays Start button', () => {
    render(<Clock />);
    const buttonString = screen.getByText(/start/i);
    expect(buttonString).toBeInTheDocument();
  });

test('Displays Lap button', () => {
  render(<Clock />);
  const buttonString = screen.getByText(/lap/i);
  expect(buttonString).toBeInTheDocument();
});

test('Displays Reset button', () => {
  render(<Clock />);
  const buttonString = screen.getByText(/reset/i);
  expect(buttonString).toBeInTheDocument();
}); 

// test ('check formatMsToTime(duration) works', () =>{
//   const result = shallow(<Clock/>);
//   expect(result).toBe("00:00:00:00");
// });