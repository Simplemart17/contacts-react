import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);

  const h1Element = screen.getByText('Contact List');

  expect(h1Element).toBeInTheDocument();
  expect(screen).toMatchSnapshot();
});
