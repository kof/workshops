import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';

const useTimer = (step) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [{startTime, currTime}, setTime] = React.useState({
    startTime: 0,
    currTime: 0
  });
  const stepRef = React.useRef();

  const remainingTime = isPlaying
    ? step.time - Math.trunc((currTime - startTime) / 1000)
    : 100;

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isPlaying && remainingTime > 0) {
        setTime({startTime, currTime: Date.now()});
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  React.useEffect(() => {
    // Detecting `step` object change.
    if (stepRef.current !== step) {
      stepRef.current = step;
      stop();
    }
  });

  const stop = () => {
    setIsPlaying(false);
    setTime({startTime: 0, currTime: 0});
  };

  const start = () => {
    setIsPlaying(true);
    setTime({startTime: Date.now(), currTime: Date.now()});
  };

  return {isPlaying, remainingTime, start, stop};
};

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
