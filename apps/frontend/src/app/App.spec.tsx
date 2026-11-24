import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /grow your brand/i }),
    ).toBeTruthy();
  });
});
