import { render, screen } from '@testing-library/react';
import App from '../App';
import { DataContextProvider } from '../dataContext'
import projectsData from './mock/projectsData'

test('renders app', () => {
  render(<DataContextProvider value={{projectsData}}><App /></DataContextProvider>);
  const linkElement = screen.getByText(/Juan Donato/i);
  expect(linkElement).toBeInTheDocument();
});
