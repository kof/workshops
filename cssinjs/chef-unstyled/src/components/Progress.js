import * as React from 'react';
import {CircularProgressIcon} from './CircularProgressIcon';
import {Time} from './Time';
import {StartButton} from './StartButton';
import {StopButton} from './StopButton';
import {CompleteIcon} from './CompleteIcon';
import {useTimer} from '../hooks/useTimer';

export const Progress = ({step, icon, autostart, onComplete, onStop}) => {
  const {isPlaying, remainingTime, start, stop} = useTimer({
    step,
    autostart,
    onComplete
  });
  return (
    <div>
      <CircularProgressIcon value={remainingTime} min={0} max={step.time} />
      {isPlaying && (
        <>
          <StopButton
            onStop={() => {
              stop();
              onStop();
            }}
          />
          <Time value={remainingTime} />
        </>
      )}
      {!isPlaying && step.time !== 0 && <StartButton onClick={start} />}
      {!isPlaying && step.time === 0 && <CompleteIcon icon={icon} />}
    </div>
  );
};
