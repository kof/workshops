import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {CircularProgress} from './design-system/CircularProgress';
import {Time} from './design-system/Time';
import {StartButton} from './design-system/StartButton';
import {useTick} from './utils/useTick';

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

export const Player = () => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const [currStep, setCurrStep] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [{startTime, currTime}, setTime] = React.useState({startTime: 0, currTime: 0});

  const {time} = recipe.steps[currStep];
  const elapsed = isPlaying ? time - Math.trunc((currTime - startTime) / 1000) : 100;

  useTick(() => {
    if (isPlaying && elapsed > 0) {
      setTime({startTime, currTime: Date.now()});
    }
  }, 1000);

  const start = () => {
    setIsPlaying(true);
    setTime({startTime: Date.now(), currTime: Date.now()});
  };

  const stop = () => {
    setIsPlaying(false);
    setTime({startTime: 0, currTime: 0});
  };

  const selectStep = (index) => {
    stop();
    setCurrStep(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <CircularProgress value={elapsed} min={0} max={time} className={classes.progressIcon} />
        {isPlaying ? <Time value={elapsed} /> : <StartButton onClick={start} />}
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
