import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = ({ ...props }: Props) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  padding: 12px 20px;
  border-style: solid;
  border-radius: 6px;
  text-align: center;
  outline: transparent;
  transition: border-color 1s ease;
  border-width: 5px;
  &:focus {
    border-color: orange;
  }
`;
export default TextField;
