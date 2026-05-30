import { render, screen } from '@testing-library/react';
import App from './App';

test('renders International Payments Portal heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/international payments portal/i);
  expect(headingElement).toBeInTheDocument();
});
