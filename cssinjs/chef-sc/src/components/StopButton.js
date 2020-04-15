import styled from 'styled-components';

export const StopButton = styled.button`
  border: none;
  width: 30%;
  height: 30%;
  cursor: pointer;
  border-radius: 10%;
  background: ${({theme}) => theme.colors.primary};
  will-change: opacity;
  transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out';
  &:hover, &:active {
    background-color: ${({theme}) => theme.colors.hover}
  }
`;
