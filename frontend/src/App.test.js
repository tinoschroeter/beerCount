import { render, screen } from '@testing-library/react';
import App from './App';

test('reset button is showed', () => {
  render(<App />);
  const linkElement = screen.getByText(/NEUE RUNDE/i);
  expect(linkElement).toBeInTheDocument();
});
