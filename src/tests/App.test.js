import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders item with role App', () => {
  render(<App />);
  const linkElement = screen.getByRole("App");
  expect(linkElement).toBeInTheDocument();
});
