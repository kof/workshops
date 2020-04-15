import * as React from 'react';
import styled from 'styled-components';
import {PlayIcon} from './PlayIcon';

const Button = styled.button`
  postion: absolue;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.bg};
  will-change: opacity;
  transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1),
    background-color 0.2s ease-in-out;
  &:hover,
  &:active {
    background-color: ${({theme}) => theme.colors.hover};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    box-shadow: ${({theme}) => theme.boxShadows.focus};
  }
`;

const Icon = styled(PlayIcon)`
  width: 50%;
`;

export const StartButton = (props) => {
  return (
    <Button type="button" {...props}>
      <Icon />
    </Button>
  );
};
