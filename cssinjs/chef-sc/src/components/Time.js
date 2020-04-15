import * as React from 'react';
import styled from 'styled-components';

const toTime = (value) => value.toString().padStart(2, '0');

const formatTime = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds].map(toTime).join(':');
};

const TimeContainer = styled.p`
  font-size: ${({theme}) => theme.fontSizes.l};
  font-feature-settings: tnum;
`;

export const Time = ({className, value}) => {
  return (
    <TimeContainer className={className}>{formatTime(value)}</TimeContainer>
  );
};
