import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error from '../../src/components/Error';

describe('Error', () => {
  it('should render heading with correct text', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const heading = screen.queryByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Something went wrong 😢');
  });

  it('should render a link to go back', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const link = screen.getByRole('link', { name: /go back/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
