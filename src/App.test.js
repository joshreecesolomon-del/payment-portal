jest.mock('./Register', () => () => <div>Register</div>);
jest.mock('./Login', () => () => <div>Login</div>);
jest.mock('./Payment', () => () => <div>Payment</div>);
jest.mock('./Staff', () => () => <div>Staff</div>);
jest.mock('./EmployeeLogin', () => () => <div>Employee Login</div>);

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders International Payments Portal heading', () => {
  render(<App />);
  expect(
    screen.getByText(/international payments portal/i)
  ).toBeInTheDocument();
});