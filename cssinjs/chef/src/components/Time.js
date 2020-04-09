import * as React from 'react';
import {createUseStyles} from 'react-jss';

const toTime = (value) => value.toString().padStart(2, '0');

const formatTime = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds].map(toTime).join(':');
};

const useStyles = createUseStyles({
  root: {}
});

export const Time = ({value}) => {
  const classes = useStyles();
  return <p className={classes.root}>{formatTime(value)}</p>;
};
