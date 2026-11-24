import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the home page', async () => {
    render(<App />);
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /entertainment\.\s*connected\.\s*beyond limits\./i,
      }),
    ).toBeTruthy();
  });
});
