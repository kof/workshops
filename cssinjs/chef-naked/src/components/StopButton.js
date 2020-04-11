import * as React from 'react';

export const StopButton = ({onStop, className}) => {
  return <button type="button" className={className} onClick={onStop} />;
};
