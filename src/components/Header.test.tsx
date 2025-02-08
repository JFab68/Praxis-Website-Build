import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from '../contexts/MenuContext';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <MenuProvider>
          <Header />
        </MenuProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('opens and closes the mobile menu', () => {
    render(
      <BrowserRouter>
        <MenuProvider>
          <Header />
        </MenuProvider>
      </BrowserRouter>
    );

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByText('Home')).toBeVisible();

    fireEvent.click(menuButton);
        expect(screen.queryByText('Home')).not.toBeVisible();
  });

    it('renders navigation links', () => {
        render(
        <BrowserRouter>
            <MenuProvider>
            <Header />
            </MenuProvider>
        </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Programs')).toBeInTheDocument();
        expect(screen.getByText('Partners')).toBeInTheDocument();
        expect(screen.getByText('Action Center')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});
