import React from 'react';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
  children: React.ReactNode;
}

interface Props extends ButtonProps {
  className?: string;
}

export const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <StyledButton className={className}>
      {children}
    </StyledButton>
  );
}
