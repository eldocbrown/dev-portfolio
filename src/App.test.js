import { render, screen } from '@testing-library/react';
import App from './App';
import { DataContextProvider } from './dataContext'

test('renders learn react link', () => {
  render(<DataContextProvider><App /></DataContextProvider>);
  const linkElement = screen.getByText(/Juan Donato/i);
  expect(linkElement).toBeInTheDocument();
});
