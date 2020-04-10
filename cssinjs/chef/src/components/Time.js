import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const toTime = (value) => value.toString().padStart(2, '0');

const formatTime = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds].map(toTime).join(':');
};

const useStyles = createUseStyles({
  time: {
    fontSize: ({theme}) => theme.fontSizes.l
  }
});

export const Time = ({className, value}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return <p className={`${classes.time} ${className}`}>{formatTime(value)}</p>;
};
