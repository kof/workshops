import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';
import {useTick} from '../utils/useTick';

const useStyles = createUseStyles({
  root: {
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
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [{startTime, currTime}, setTime] = React.useState({
    startTime: 0,
    currTime: 0
  });
  const stepRef = React.useRef();

  const elapsed = isPlaying
    ? step.time - Math.trunc((currTime - startTime) / 1000)
    : 100;

  const stop = () => {
    setIsPlaying(false);
    setTime({startTime: 0, currTime: 0});
  };

  const start = () => {
    setIsPlaying(true);
    setTime({startTime: Date.now(), currTime: Date.now()});
  };

  useTick(() => {
    if (isPlaying && elapsed > 0) {
      setTime({startTime, currTime: Date.now()});
    }
  }, 1000);

  React.useEffect(() => {
    if (stepRef.current !== step) {
      stepRef.current = step;
      stop();
    }
  });

  return (
    <div className={classes.root}>
      <CircularProgressIcon
        value={elapsed}
        min={0}
        max={step.time}
        className={classes.icon}
      />
      {isPlaying ? <Time value={elapsed} /> : <StartButton onClick={start} />}
    </div>
  );
};
