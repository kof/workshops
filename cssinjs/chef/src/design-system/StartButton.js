import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles({
  root: {
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
    transition: 'opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out',
    '&:hover, &:active': {
      backgroundColor: (p) => p.theme.colors.hover,
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 0,
      boxShadow: (p) => p.theme.boxShadows.focus
    }
  },
  playIcon: {
    width: '50%'
  }
});

const PlayIcon = ({className}) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
  </svg>
);

export const StartButton = (props) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <button type="button" className={classes.root} {...props}>
      <PlayIcon className={classes.playIcon} />
    </button>
  );
};
