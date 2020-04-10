import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';
import {StopButton} from './StopButton';
import {useTimer} from '../hooks/useTimer';

const useStyles = createUseStyles({
  progress: {
    position: 'relative',
    width: 150,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  },
  time: {
    marginTop: 10,
    marginBottom: 15
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
        <>
          <StopButton onStop={stop} />
          <Time value={remainingTime} className={classes.time} />
        </>
      ) : (
        <StartButton onClick={start} />
      )}
    </div>
  );
};
