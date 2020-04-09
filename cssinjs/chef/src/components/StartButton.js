import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {PlayIcon} from './PlayIcon';

const useStyles = createUseStyles({
  button: {
    postion: 'absolue',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: (p) => p.theme.colors.primary,
    border: 0,
    borderRadius: '50%',
    color: (p) => p.theme.colors.bg,
    willChange: 'opacity',
    transition:
      'opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out',
    '&:hover, &:active': {
      backgroundColor: (p) => p.theme.colors.hover,
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 0,
      boxShadow: (p) => p.theme.boxShadows.focus
    }
  },
  icon: {
    width: '50%'
  }
});

export const StartButton = (props) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <button type="button" className={classes.button} {...props}>
      <PlayIcon className={classes.icon} />
    </button>
  );
};
