import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>);
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
  });
});
