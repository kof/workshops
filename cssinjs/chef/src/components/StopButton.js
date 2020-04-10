import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles({
  stopButton: {
    border: 'none',
    width: '30%',
    height: '30%',
    cursor: 'pointer',
    borderRadius: '10%',
    background: ({theme}) => theme.colors.primary,
    willChange: 'opacity',
    transition:
      'opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out',
    '&:hover, &:active': {
      backgroundColor: ({theme}) => theme.colors.hover,
      cursor: 'pointer'
    }
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
