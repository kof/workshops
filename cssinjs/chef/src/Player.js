import * as React from 'react';
import {CircularProgress} from './design-system/CircularProgress';
import {createUseStyles, useTheme} from 'react-jss';
import styled from 'styled-components';
import {Time} from './design-system/Time';

const useStyles = createUseStyles({
  progress: {
    position: 'relative',
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressIcon: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  playIcon: {
    width: '50%'
  },
  step: {
    listStyle: 'none',
    counterIncrement: 'steps-counter 1',
    padding: 0,
    '&::before': {
      content: 'counter(steps-counter)',
      minWidth: '1rem',
      color: (p) => p.theme.colors.primary,
      fontWeight: (p) => p.theme.fontWeights.bold
    }
  }
});

const recipe = {
  steps: [
    {
      time: 30,
      description: 'do that'
    },
    {
      time: 5,
      description: 'do this'
    }
  ]
};

const PlayIcon = ({className}) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
  </svg>
);

const StartButton = styled('button')`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: ${(p) => p.theme.colors.primary};
  border: 0;
  border-radius: 50%;
  color: ${(p) => p.theme.colors.bg};
  will-change: opacity;
  transition: opacity 0.7s cubic-bezier(0.61, 1, 0.88, 1), background-color 0.2s ease-in-out;
  &:hover,
  &:active {
    background-color: ${(p) => p.theme.colors.hover};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    box-shadow: ${(p) => p.theme.boxShadows.focus};
  }
`;

export const Player = () => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const [currStep, setCurrStep] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [currTime, setCurrTime] = React.useState(0);

  const {time} = recipe.steps[currStep];
  const elapsed = isPlaying ? time - Math.trunc((currTime - startTime) / 1000) : 0;

  if (elapsed > 0) {
    setTimeout(() => {
      setCurrTime(Date.now());
    }, 1000);
  }

  const start = () => {
    setIsPlaying(true);
    setCurrTime(Date.now());
    setStartTime(Date.now());
  };

  const stop = () => {
    setIsPlaying(false);
    setCurrTime(0);
    setStartTime(0);
  };

  const selectStep = (index) => {
    stop();
    setCurrStep(index);
  };

  const startButton = (
    <StartButton type="button">
      <PlayIcon className={classes.playIcon} />
    </StartButton>
  );
  const timeDisplay = <Time value={elapsed} />;

  return (
    <div className={classes.root}>
      <div className={classes.progress} onClick={start}>
        {isPlaying ? timeDisplay : startButton}
        <CircularProgress value={elapsed} min={0} max={time} className={classes.progressIcon} />
      </div>
      <ul>
        {recipe.steps.map((step, index) => (
          <li className={classes.step} onClick={() => selectStep(index)} key={step.description}>
            {step.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
