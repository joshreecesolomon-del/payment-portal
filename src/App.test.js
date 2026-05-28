import { render, screen } from '@testing-library/react';
import App from './App';

test('renders payment portal heading', () => {
  render(<App />);
  const heading = screen.getByText(/international payments portal/i);
  expect(heading).toBeInTheDocument();
});
