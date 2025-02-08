import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
