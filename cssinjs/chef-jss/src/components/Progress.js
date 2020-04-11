import * as React from 'react';
import {createUseStyles} from 'react-jss';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';
import {StopButton} from './StopButton';
import {CompleteIcon} from './CompleteIcon';
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
    marginTop: 6,
    marginBottom: 18
  }
});

export const Progress = ({step, icon, autostart, onComplete, onStop}) => {
  const classes = useStyles();
  const {isPlaying, remainingTime, start, stop} = useTimer({
    step,
    autostart,
    onComplete
  });
  return (
    <div className={classes.progress}>
      <CircularProgressIcon
        value={remainingTime}
        min={0}
        max={step.time}
        className={classes.icon}
      />
      {isPlaying && (
        <>
          <StopButton
            onStop={() => {
              stop();
              onStop();
            }}
          />
          <Time value={remainingTime} className={classes.time} />
        </>
      )}
      {!isPlaying && step.time !== 0 && <StartButton onClick={start} />}
      {!isPlaying && step.time === 0 && <CompleteIcon icon={icon} />}
    </div>
  );
};
