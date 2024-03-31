import { render, screen } from '@testing-library/react';
import Button from '../button';
import reactIcon from '@/assets/react.svg';

describe('button test', () => {
  it('should desplay the children', () => {
    render(<Button>test</Button>);
    const btnText = screen.getByText('test');
    expect(btnText).toBeInTheDocument();
  });

  it('should be disabled when true', () => {
    render(<Button disabled>test</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  it('should render classNames', () => {
    render(<Button className='test'>test</Button>);
    const btn = screen.getByRole('button');
    expect(btn.classList.length).not.toBe(0);
  });

  it('should be use the right spinType value', () => {
    render(<Button isLoading>test</Button>);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
  it('is should display left icon', () => {
    render(<Button leftIcon={<img src={reactIcon} alt='left-icon' />}>text</Button>);
    const leftIcon = screen.getByRole('img');
    expect(leftIcon).toBeInTheDocument();
  });
  it('is should display right icon', () => {
    render(<Button rightIcon={<img src={reactIcon} alt='right-icon' />}>text</Button>);
    const rightIcon = screen.getByRole('img');
    expect(rightIcon).toBeInTheDocument();
  });
});
