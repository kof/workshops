import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles();

export const CompleteIcon = ({icon}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return <div className={classes.completeIcon}>{icon}</div>;
};
