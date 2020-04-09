import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';
import {useTimer} from '../hooks/useTimer';

const useStyles = createUseStyles({
  progress: {
    position: 'relative',
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export const Progress = ({step}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const {isPlaying, remainingTime, start, stop} = useTimer(step);

  return (
    <div className={classes.progress}>
      <CircularProgressIcon
        value={remainingTime}
        min={0}
        max={step.time}
        className={classes.icon}
      />
      {isPlaying ? (
        <Time value={remainingTime} />
      ) : (
        <StartButton onClick={start} />
      )}
    </div>
  );
};
