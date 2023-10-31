import styled from '@emotion/styled';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: aqua;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  user-select: ${({ disabled }) => (disabled ? 'none' : 'initial')};
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.7)};
  }
`;

export default Button;
