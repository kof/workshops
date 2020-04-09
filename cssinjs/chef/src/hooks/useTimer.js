import * as React from 'react';

export const useTimer = (step) => {
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
