import {useEffect} from 'react';

export const useTick = (fn, delay) => {
  useEffect(() => {
    const timeoutId = setTimeout(fn, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  });
};
