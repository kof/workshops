import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {PlayIcon} from './PlayIcon';

const useStyles = createUseStyles();

export const StartButton = (props) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <button type="button" className={classes.button} {...props}>
      <PlayIcon className={classes.icon} />
    </button>
  );
};
