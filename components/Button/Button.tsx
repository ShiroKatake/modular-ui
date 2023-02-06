import React from 'react';
import { StyledButton } from './Button.styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
}

interface Props extends ButtonProps {
  className?: string;
}

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}
