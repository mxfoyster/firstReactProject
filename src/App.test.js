import { render, screen } from '@testing-library/react';
import App from './App';

test('renders W3SCHOOLS', () => {
  render(<App />);
  const linkElement = screen.getByText(/W3SCHOOLS/i);
  expect(linkElement).toBeInTheDocument();
});
 