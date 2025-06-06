import styled from '@emotion/styled';
import tw from 'twin.macro';
import { keyframes } from '@emotion/react';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
export const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyleContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
  background-color: #black;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const StyleEmoji = styled.div`
  ${tw`text-5xl mb-5`}
  animation: ${spin} 2s linear infinite;
`;

export const StyleErrorText = styled.div`
  ${tw`text-5xl text-white font-bold mb-5`}
  animation: ${slideIn} 1s ease-in-out;
`;

export const StyleBackLink = styled.a`
  ${tw`no-underline text-black bg-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-gray-400 transition-colors`}
`;