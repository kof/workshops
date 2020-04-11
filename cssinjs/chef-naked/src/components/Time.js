import * as React from 'react';

const toTime = (value) => value.toString().padStart(2, '0');

const formatTime = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds].map(toTime).join(':');
};

export const Time = ({className, value}) => {
  return <p className={className}>{formatTime(value)}</p>;
};
