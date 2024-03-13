import { render, screen } from '@testing-library/react';
import Loader from '../../src/components/Loader';

describe('Loader', () => {
  it('should render a spinner loader when type is set to spinner', () => {
    const type = 'spinner';
    render(<Loader type={type} />);
    const spinnerLoader = screen.getByRole('spinner-loader');
    expect(spinnerLoader).toBeInTheDocument();
  });

  it('should render a default loader when no type is provided', () => {
    render(<Loader />);
    const defaultLoader = screen.getByRole('default-loader');
    expect(defaultLoader).toBeInTheDocument();
  });
});
