import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MenuProvider } from './contexts/MenuContext';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
    <MenuProvider>
      <App />
    </MenuProvider>);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming Header is always present
  });
});
