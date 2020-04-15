import * as React from 'react';
import styled from 'styled-components';
import {CircularProgressIcon as CircularProgressIconBase} from './CircularProgressIcon';
import {Time as TimeBase} from './Time';
import {StartButton} from './StartButton';
import {StopButton} from './StopButton';
import {CompleteIcon} from './CompleteIcon';
import {useTimer} from '../hooks/useTimer';

const ProgressContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const CircularProgressIcon = styled(CircularProgressIconBase)`
  position: absolute;
  top: 0;
  left: 0;
  zindex: -1;
`;

const Time = styled(TimeBase)`
  margin-top: 6px;
  marginbottom: 18px;
`;

export const Progress = ({step, icon, autostart, onComplete, onStop}) => {
  const {isPlaying, remainingTime, start, stop} = useTimer({
    step,
    autostart,
    onComplete
  });
  return (
    <ProgressContainer>
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
    </ProgressContainer>
  );
};
