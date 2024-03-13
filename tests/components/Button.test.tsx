import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';
import { BrowserRouter } from 'react-router-dom';

describe('Button', () => {
  it('should render a Link element with the specified to prop value when the to prop is provided', () => {
    const children = 'Test Button';
    const btnStyles = 'btnAdd';
    const disabled = false;
    const to = '/home';
    const type = undefined;
    const onClick = undefined;

    render(
      <BrowserRouter>
        <Button children={children} btnStyles={btnStyles} disabled={disabled} to={to} type={type} onClick={onClick} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', to);
  });

  it('should render a disabled button when disabled prop is true', () => {
    const children = 'Test Button';
    const btnStyles = 'btnAdd';
    const disabled = true;
    const to = undefined;
    const type = undefined;
    const onClick = undefined;

    render(<Button children={children} btnStyles={btnStyles} disabled={disabled} to={to} type={type} onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('disabled');
  });
});
