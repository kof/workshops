import * as React from 'react';
import {PlayIcon} from './PlayIcon';

export const StartButton = (props) => {
  return (
    <button type="button" {...props}>
      <PlayIcon />
    </button>
  );
};
