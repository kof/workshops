import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles({
  step: {
    listStyle: 'none',
    counterIncrement: 'steps-counter 1',
    padding: 0,
    '&::before': {
      content: 'counter(steps-counter)',
      minWidth: '1rem',
      color: (p) => p.theme.colors.primary,
      fontWeight: (p) => p.theme.fontWeights.bold
    }
  }
});

export const Steps = ({steps, onSelect}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <ul>
      {steps.map((step, index) => (
        <li
          className={classes.step}
          onClick={() => onSelect(step)}
          key={step.description}
        >
          {step.description}
        </li>
      ))}
    </ul>
  );
};
