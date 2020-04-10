import * as React from 'react';

export const useTimer = ({step, autostart, onComplete}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [{startTime, currTime}, setTime] = React.useState({
    startTime: 0,
    currTime: 0
  });

  const remainingTime = isPlaying
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

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isPlaying && remainingTime > 0) {
        setTime({startTime, currTime: Date.now()});
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  });

  React.useEffect(stop, [step]);

  React.useEffect(() => {
    if (isPlaying && remainingTime === 0) {
      stop();
      onComplete();
    }

    if (!isPlaying && autostart) {
      start();
    }
  });

  return {isPlaying, remainingTime, start, stop};
};
