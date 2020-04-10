import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles({
  stopButton: {
    border: 'none',
    width: '30%',
    height: '30%',
    cursor: 'pointer',
    background: ({theme}) => theme.colors.primary
  }
});

export const StopButton = ({onStop, className}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <button
      type="button"
      className={`${classes.stopButton} ${className}`}
      onClick={onStop}
    />
  );
};
