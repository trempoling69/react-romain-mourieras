import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
    from{
      transform: rotate(0deg);

    }
    to{
      transform: rotate(360deg);

    }
`;

const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export default Loading;
