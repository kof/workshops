import * as React from 'react';
import 'styled-components/macro';

export const StopButton = ({className, onStop}) => (
  <button
    css={`
      border: none;
      width: 30%;
      height: 30%;
      cursor: pointer;
      border-radius: 10%;
      background: ${({theme}) => theme.colors.primary};
      will-change: opacity;
      transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out';
    `}
    className={className}
    onClick={onStop}
    type="button"
  ></button>
);
