import "reflect-metadata";
import { render, screen } from '@testing-library/react';
import App from './App';
import { DIProvider } from "./di.context";

test('renders learn react link', () => {
  render(<DIProvider><App /></DIProvider>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).not.toBeInTheDocument();
});
